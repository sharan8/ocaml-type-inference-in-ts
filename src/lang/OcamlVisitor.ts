// Generated from ./src/lang/Ocaml.g4 by ANTLR 4.9.0-SNAPSHOT
// @ts-nocheck
/* eslint-disable */

import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `OcamlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface OcamlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `valueName`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueName?: (ctx: ValueNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantInt`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantInt?: (ctx: ConstantIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantBool`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantBool?: (ctx: ConstantBoolContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantStr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantStr?: (ctx: ConstantStrContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprInParantheses`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprInParantheses?: (ctx: ExprInParanthesesContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprWithPrefix`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprWithPrefix?: (ctx: ExprWithPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryOp`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOp?: (ctx: BinaryOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionalExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpr?: (ctx: ConditionalExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `whileLoop`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileLoop?: (ctx: WhileLoopContext) => Result;

	/**
	 * Visit a parse tree produced by the `forLoop`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForLoop?: (ctx: ForLoopContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprSemicolonExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprSemicolonExpr?: (ctx: ExprSemicolonExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambda`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by the `application`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplication?: (ctx: ApplicationContext) => Result;

	/**
	 * Visit a parse tree produced by the `letExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetExpr?: (ctx: LetExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `globalLetExpr`
	 * labeled alternative in `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalLetExpr?: (ctx: GlobalLetExprContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.value_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_name?: (ctx: Value_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.operator_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator_name?: (ctx: Operator_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.infix_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfix_op?: (ctx: Infix_opContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.typexpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypexpr?: (ctx: TypexprContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.typexpr_recur`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypexpr_recur?: (ctx: Typexpr_recurContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.constant_integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_integer?: (ctx: Constant_integerContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.constant_boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_boolean?: (ctx: Constant_booleanContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.constant_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_string?: (ctx: Constant_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `OcamlParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
}

