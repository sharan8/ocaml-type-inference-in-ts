// Generated from ./src/lang/Ocaml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ValueNameContext } from "./OcamlParser";
import { ConstantIntContext } from "./OcamlParser";
import { ConstantBoolContext } from "./OcamlParser";
import { ConstantStrContext } from "./OcamlParser";
import { ExprInParanthesesContext } from "./OcamlParser";
import { ExprWithPrefixContext } from "./OcamlParser";
import { BinaryOpContext } from "./OcamlParser";
import { ConditionalExprContext } from "./OcamlParser";
import { WhileLoopContext } from "./OcamlParser";
import { ForLoopContext } from "./OcamlParser";
import { ExprSemicolonExprContext } from "./OcamlParser";
import { LambdaContext } from "./OcamlParser";
import { ApplicationContext } from "./OcamlParser";
import { LetExprContext } from "./OcamlParser";
import { GlobalLetExprContext } from "./OcamlParser";
import { LetRecExprContext } from "./OcamlParser";
import { GlobalLetRecExprContext } from "./OcamlParser";
import { Value_nameContext } from "./OcamlParser";
import { Operator_nameContext } from "./OcamlParser";
import { Infix_opContext } from "./OcamlParser";
import { TypexprContext } from "./OcamlParser";
import { Typexpr_recurContext } from "./OcamlParser";
import { Constant_integerContext } from "./OcamlParser";
import { Constant_booleanContext } from "./OcamlParser";
import { Constant_stringContext } from "./OcamlParser";
import { PatternContext } from "./OcamlParser";
import { ExprContext } from "./OcamlParser";
import { ParameterContext } from "./OcamlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `OcamlParser`.
 */
export interface OcamlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `valueName`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterValueName?: (ctx: ValueNameContext) => void;
	/**
	 * Exit a parse tree produced by the `valueName`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitValueName?: (ctx: ValueNameContext) => void;

	/**
	 * Enter a parse tree produced by the `constantInt`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterConstantInt?: (ctx: ConstantIntContext) => void;
	/**
	 * Exit a parse tree produced by the `constantInt`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitConstantInt?: (ctx: ConstantIntContext) => void;

	/**
	 * Enter a parse tree produced by the `constantBool`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterConstantBool?: (ctx: ConstantBoolContext) => void;
	/**
	 * Exit a parse tree produced by the `constantBool`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitConstantBool?: (ctx: ConstantBoolContext) => void;

	/**
	 * Enter a parse tree produced by the `constantStr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterConstantStr?: (ctx: ConstantStrContext) => void;
	/**
	 * Exit a parse tree produced by the `constantStr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitConstantStr?: (ctx: ConstantStrContext) => void;

	/**
	 * Enter a parse tree produced by the `exprInParantheses`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprInParantheses?: (ctx: ExprInParanthesesContext) => void;
	/**
	 * Exit a parse tree produced by the `exprInParantheses`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprInParantheses?: (ctx: ExprInParanthesesContext) => void;

	/**
	 * Enter a parse tree produced by the `exprWithPrefix`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprWithPrefix?: (ctx: ExprWithPrefixContext) => void;
	/**
	 * Exit a parse tree produced by the `exprWithPrefix`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprWithPrefix?: (ctx: ExprWithPrefixContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryOp`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBinaryOp?: (ctx: BinaryOpContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryOp`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBinaryOp?: (ctx: BinaryOpContext) => void;

	/**
	 * Enter a parse tree produced by the `conditionalExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpr?: (ctx: ConditionalExprContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionalExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpr?: (ctx: ConditionalExprContext) => void;

	/**
	 * Enter a parse tree produced by the `whileLoop`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterWhileLoop?: (ctx: WhileLoopContext) => void;
	/**
	 * Exit a parse tree produced by the `whileLoop`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitWhileLoop?: (ctx: WhileLoopContext) => void;

	/**
	 * Enter a parse tree produced by the `forLoop`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterForLoop?: (ctx: ForLoopContext) => void;
	/**
	 * Exit a parse tree produced by the `forLoop`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitForLoop?: (ctx: ForLoopContext) => void;

	/**
	 * Enter a parse tree produced by the `exprSemicolonExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprSemicolonExpr?: (ctx: ExprSemicolonExprContext) => void;
	/**
	 * Exit a parse tree produced by the `exprSemicolonExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprSemicolonExpr?: (ctx: ExprSemicolonExprContext) => void;

	/**
	 * Enter a parse tree produced by the `lambda`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by the `lambda`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by the `application`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterApplication?: (ctx: ApplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `application`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitApplication?: (ctx: ApplicationContext) => void;

	/**
	 * Enter a parse tree produced by the `letExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLetExpr?: (ctx: LetExprContext) => void;
	/**
	 * Exit a parse tree produced by the `letExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLetExpr?: (ctx: LetExprContext) => void;

	/**
	 * Enter a parse tree produced by the `globalLetExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterGlobalLetExpr?: (ctx: GlobalLetExprContext) => void;
	/**
	 * Exit a parse tree produced by the `globalLetExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitGlobalLetExpr?: (ctx: GlobalLetExprContext) => void;

	/**
	 * Enter a parse tree produced by the `letRecExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLetRecExpr?: (ctx: LetRecExprContext) => void;
	/**
	 * Exit a parse tree produced by the `letRecExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLetRecExpr?: (ctx: LetRecExprContext) => void;

	/**
	 * Enter a parse tree produced by the `globalLetRecExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterGlobalLetRecExpr?: (ctx: GlobalLetRecExprContext) => void;
	/**
	 * Exit a parse tree produced by the `globalLetRecExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitGlobalLetRecExpr?: (ctx: GlobalLetRecExprContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.value_name`.
	 * @param ctx the parse tree
	 */
	enterValue_name?: (ctx: Value_nameContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.value_name`.
	 * @param ctx the parse tree
	 */
	exitValue_name?: (ctx: Value_nameContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.operator_name`.
	 * @param ctx the parse tree
	 */
	enterOperator_name?: (ctx: Operator_nameContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.operator_name`.
	 * @param ctx the parse tree
	 */
	exitOperator_name?: (ctx: Operator_nameContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.infix_op`.
	 * @param ctx the parse tree
	 */
	enterInfix_op?: (ctx: Infix_opContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.infix_op`.
	 * @param ctx the parse tree
	 */
	exitInfix_op?: (ctx: Infix_opContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.typexpr`.
	 * @param ctx the parse tree
	 */
	enterTypexpr?: (ctx: TypexprContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.typexpr`.
	 * @param ctx the parse tree
	 */
	exitTypexpr?: (ctx: TypexprContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.typexpr_recur`.
	 * @param ctx the parse tree
	 */
	enterTypexpr_recur?: (ctx: Typexpr_recurContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.typexpr_recur`.
	 * @param ctx the parse tree
	 */
	exitTypexpr_recur?: (ctx: Typexpr_recurContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.constant_integer`.
	 * @param ctx the parse tree
	 */
	enterConstant_integer?: (ctx: Constant_integerContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.constant_integer`.
	 * @param ctx the parse tree
	 */
	exitConstant_integer?: (ctx: Constant_integerContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.constant_boolean`.
	 * @param ctx the parse tree
	 */
	enterConstant_boolean?: (ctx: Constant_booleanContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.constant_boolean`.
	 * @param ctx the parse tree
	 */
	exitConstant_boolean?: (ctx: Constant_booleanContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.constant_string`.
	 * @param ctx the parse tree
	 */
	enterConstant_string?: (ctx: Constant_stringContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.constant_string`.
	 * @param ctx the parse tree
	 */
	exitConstant_string?: (ctx: Constant_stringContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `OcamlParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `OcamlParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
}

