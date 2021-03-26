/* tslint:disable:max-classes-per-file */
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import {
  ExprContext,
  OcamlParser,
  BinaryOpContext,
  ConstantIntContext,
  ConstantBoolContext,
  ConstantStrContext,
  LetExprContext,
  PatternContext,
  Value_nameContext,
  ValueNameContext,
  ExprInParanthesesContext,
  ConditionalExprContext,
  WhileLoopContext,
  ForLoopContext,
  LambdaContext,
  ParameterContext,
} from '../lang/OcamlParser'
import { OcamlLexer } from '../lang/OcamlLexer'
import { OcamlVisitor } from '../lang/OcamlVisitor'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AstNode, BinaryOp, Conditional, For, Id, Lambda, Let, Sequence, While } from '../type-inference/nodes'

class ExpressionGenerator extends AbstractParseTreeVisitor<AstNode> implements OcamlVisitor<AstNode> {
  visitValueName(ctx: ValueNameContext): Id {
    return new Id(ctx.text) 
  }
  visitConstantInt(ctx: ConstantIntContext): AstNode {
    return new Id(ctx.text) 
  }
  visitConstantBool(ctx: ConstantBoolContext): AstNode {
    return new Id(ctx.text) 
  }
  visitConstantStr(ctx: ConstantStrContext): AstNode {
    return new Id(ctx.text) 
  }
	visitExprInParantheses(ctx: ExprInParanthesesContext): AstNode {
    return this.visit(ctx._inner)
  }
  visitBinaryOp(ctx: BinaryOpContext): AstNode {
    return new BinaryOp(ctx._operator.text, this.visit(ctx._left), this.visit(ctx._right)) 
  }
  visitConditionalExpr(ctx: ConditionalExprContext): AstNode {
    return new Conditional(this.visit(ctx._condition), this.visit(ctx._consequent), this.visit(ctx._alternative))
  }
  visitWhileLoop(ctx: WhileLoopContext): AstNode {
    return new While(this.visit(ctx._condition), this.visit(ctx._body))
  }
  visitForLoop(ctx: ForLoopContext): AstNode {
    return new For(this.visitValue_Name(ctx._name), this.visit(ctx._binding), this.visit(ctx._end), this.visit(ctx._body))
  }
  visitLambda(ctx: LambdaContext): AstNode {
    return new Lambda(ctx.parameter().map(param => this.visitParameter(param)), this.visit(ctx._body))
  }
  visitParameter(ctx: ParameterContext): Id {
    return this.visitPattern(ctx.pattern())
  }
  visitValue_Name(ctx: Value_nameContext): Id {
    return new Id(ctx.text) 
  }
  visitPattern(ctx: PatternContext): Id {
    return this.visitValue_Name(ctx._val);
  }
  visitLetExpr(ctx: LetExprContext): AstNode {
    return new Let(this.visitPattern(ctx._name), this.visit(ctx._binding), this.visit(ctx._in_context))
  }
  defaultResult(): AstNode {
    return new Id("Default") 
  }
  visitExpr?: ((ctx: ExprContext) => AstNode) | undefined
  visit(tree: ParseTree): AstNode {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): AstNode {
    const expressions: AstNode[] = []
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this))
    }
    return new Sequence(expressions) 
  }
  visitErrorNode(node: ErrorNode): AstNode {
    throw new Error()
  }
}

function convertExpression(expression: ExprContext): AstNode {
  const generator = new ExpressionGenerator()
  return expression.accept(generator)
}

function convertOcaml(expression: ExprContext): AstNode {
  return {
        expression: convertExpression(expression)
  }
}

export function parse(input: string) {
  let program: AstNode | undefined
  
    const inputStream = new ANTLRInputStream(input)
    const lexer = new OcamlLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new OcamlParser(tokenStream)
    parser.buildParseTree = true
    try {
      const tree = parser.expr()
      program = convertOcaml(tree)
      return program
    } catch (error) {
        throw error
    }
}
