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
  ApplicationContext,
  GlobalLetExprContext,
} from '../lang/OcamlParser'
import { OcamlLexer } from '../lang/OcamlLexer'
import { OcamlVisitor } from '../lang/OcamlVisitor'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { Apply, AstNode, basicType, BinaryOp, Conditional, For, GlobalLet, Id, Lambda, Let, Sequence, While } from '../type-inference/nodes'
import { ParseError } from '../type-inference/errors'
class ExpressionGenerator extends AbstractParseTreeVisitor<AstNode> implements OcamlVisitor<AstNode> {
  visitValueName(ctx: ValueNameContext): Id {
    return new Id(ctx.text, basicType.reference) 
  }
  visitConstantInt(ctx: ConstantIntContext): AstNode {
    return new Id(ctx.text, basicType.integer_literal) 
  }
  visitConstantBool(ctx: ConstantBoolContext): AstNode {
    return new Id(ctx.text, basicType.bool_literal) 
  }
  visitConstantStr(ctx: ConstantStrContext): AstNode {
    return new Id(ctx.text, basicType.string_literal) 
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
	visitApplication(ctx: ApplicationContext): AstNode {
    return new Apply(this.visit(ctx._fun), this.visit(ctx._argument))
  }
  visitParameter(ctx: ParameterContext): Id {
    return this.visitPattern(ctx.pattern())
  }
  visitValue_Name(ctx: Value_nameContext): Id {
    return new Id(ctx.text, basicType.reference) 
  }
  visitPattern(ctx: PatternContext): Id {
    return this.visitValue_Name(ctx._val);
  }
  visitLetExpr(ctx: LetExprContext): AstNode {
    return new Let(this.visitPattern(ctx._name), this.visit(ctx._binding), this.visit(ctx._in_context))
  }
  visitGlobalLetExpr(ctx: GlobalLetExprContext): AstNode {
    return new GlobalLet(this.visitPattern(ctx._name), this.visit(ctx._binding))
  }
  defaultResult(): AstNode {
    return new Id("Default", basicType.default) 
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
    throw new ParseError("Parsing error: " + node.toString() + " is not a valid expression")
  }
}

function convertOcaml(expression: ExprContext): AstNode {
  const generator = new ExpressionGenerator()
  return expression.accept(generator)
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
