// Generated from ./src/lang/Ocaml.g4 by ANTLR 4.9.0-SNAPSHOT
// @ts-nocheck
/* eslint-disable */

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { OcamlListener } from "./OcamlListener";
import { OcamlVisitor } from "./OcamlVisitor";


export class OcamlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly WHITESPACE = 42;
	public static readonly CAPITALIZED_IDENT = 43;
	public static readonly LOWERCASE_IDENT = 44;
	public static readonly IDENT = 45;
	public static readonly INTEGER_LITERAL = 46;
	public static readonly STRING_LITERAL = 47;
	public static readonly LABEL_NAME = 48;
	public static readonly OPERATOR_CHAR = 49;
	public static readonly INFIX_SYMBOL = 50;
	public static readonly PREFIX_SYMBOL = 51;
	public static readonly RULE_value_name = 0;
	public static readonly RULE_operator_name = 1;
	public static readonly RULE_infix_op = 2;
	public static readonly RULE_typexpr = 3;
	public static readonly RULE_typexpr_recur = 4;
	public static readonly RULE_constant_integer = 5;
	public static readonly RULE_constant_boolean = 6;
	public static readonly RULE_constant_string = 7;
	public static readonly RULE_pattern = 8;
	public static readonly RULE_expr = 9;
	public static readonly RULE_parameter = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"value_name", "operator_name", "infix_op", "typexpr", "typexpr_recur", 
		"constant_integer", "constant_boolean", "constant_string", "pattern", 
		"expr", "parameter",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'*'", "'+'", "'-'", "'-.'", "'='", "'!='", "'<'", 
		"'>'", "'or'", "'||'", "'&'", "'&&'", "':='", "'mod'", "'land'", "'lor'", 
		"'lxor'", "'lsl'", "'lsr'", "'asr'", "'''", "'->'", "'false'", "'true'", 
		"'_'", "'if'", "'then'", "'else'", "'while'", "'do'", "'done'", "'for'", 
		"'to'", "'downto'", "';'", "'fun'", "'let'", "'rec'", "'in'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"WHITESPACE", "CAPITALIZED_IDENT", "LOWERCASE_IDENT", "IDENT", "INTEGER_LITERAL", 
		"STRING_LITERAL", "LABEL_NAME", "OPERATOR_CHAR", "INFIX_SYMBOL", "PREFIX_SYMBOL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(OcamlParser._LITERAL_NAMES, OcamlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return OcamlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Ocaml.g4"; }

	// @Override
	public get ruleNames(): string[] { return OcamlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return OcamlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(OcamlParser._ATN, this);
	}
	// @RuleVersion(0)
	public value_name(): Value_nameContext {
		let _localctx: Value_nameContext = new Value_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, OcamlParser.RULE_value_name);
		try {
			this.state = 27;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OcamlParser.LOWERCASE_IDENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 22;
				this.match(OcamlParser.LOWERCASE_IDENT);
				}
				break;
			case OcamlParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 23;
				this.match(OcamlParser.T__0);
				this.state = 24;
				this.operator_name();
				this.state = 25;
				this.match(OcamlParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator_name(): Operator_nameContext {
		let _localctx: Operator_nameContext = new Operator_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, OcamlParser.RULE_operator_name);
		try {
			this.state = 31;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OcamlParser.PREFIX_SYMBOL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 29;
				this.match(OcamlParser.PREFIX_SYMBOL);
				}
				break;
			case OcamlParser.T__2:
			case OcamlParser.T__3:
			case OcamlParser.T__4:
			case OcamlParser.T__5:
			case OcamlParser.T__6:
			case OcamlParser.T__7:
			case OcamlParser.T__8:
			case OcamlParser.T__9:
			case OcamlParser.T__10:
			case OcamlParser.T__11:
			case OcamlParser.T__12:
			case OcamlParser.T__13:
			case OcamlParser.T__14:
			case OcamlParser.T__15:
			case OcamlParser.T__16:
			case OcamlParser.T__17:
			case OcamlParser.T__18:
			case OcamlParser.T__19:
			case OcamlParser.T__20:
			case OcamlParser.T__21:
			case OcamlParser.INFIX_SYMBOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 30;
				this.infix_op();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public infix_op(): Infix_opContext {
		let _localctx: Infix_opContext = new Infix_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, OcamlParser.RULE_infix_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << OcamlParser.T__2) | (1 << OcamlParser.T__3) | (1 << OcamlParser.T__4) | (1 << OcamlParser.T__5) | (1 << OcamlParser.T__6) | (1 << OcamlParser.T__7) | (1 << OcamlParser.T__8) | (1 << OcamlParser.T__9) | (1 << OcamlParser.T__10) | (1 << OcamlParser.T__11) | (1 << OcamlParser.T__12) | (1 << OcamlParser.T__13) | (1 << OcamlParser.T__14) | (1 << OcamlParser.T__15) | (1 << OcamlParser.T__16) | (1 << OcamlParser.T__17) | (1 << OcamlParser.T__18) | (1 << OcamlParser.T__19) | (1 << OcamlParser.T__20) | (1 << OcamlParser.T__21))) !== 0) || _la === OcamlParser.INFIX_SYMBOL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typexpr(): TypexprContext {
		let _localctx: TypexprContext = new TypexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, OcamlParser.RULE_typexpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(OcamlParser.T__22);
			this.state = 36;
			this.match(OcamlParser.IDENT);
			this.state = 37;
			this.typexpr_recur();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typexpr_recur(): Typexpr_recurContext {
		let _localctx: Typexpr_recurContext = new Typexpr_recurContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, OcamlParser.RULE_typexpr_recur);
		try {
			this.state = 48;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 39;
				this.match(OcamlParser.T__2);
				this.state = 40;
				this.typexpr();
				this.state = 41;
				this.typexpr_recur();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.match(OcamlParser.T__23);
				this.state = 44;
				this.typexpr();
				this.state = 45;
				this.typexpr_recur();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant_integer(): Constant_integerContext {
		let _localctx: Constant_integerContext = new Constant_integerContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, OcamlParser.RULE_constant_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(OcamlParser.INTEGER_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant_boolean(): Constant_booleanContext {
		let _localctx: Constant_booleanContext = new Constant_booleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, OcamlParser.RULE_constant_boolean);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			_la = this._input.LA(1);
			if (!(_la === OcamlParser.T__24 || _la === OcamlParser.T__25)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant_string(): Constant_stringContext {
		let _localctx: Constant_stringContext = new Constant_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, OcamlParser.RULE_constant_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.match(OcamlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, OcamlParser.RULE_pattern);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case OcamlParser.T__0:
			case OcamlParser.LOWERCASE_IDENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				_localctx._val = this.value_name();
				}
				break;
			case OcamlParser.T__26:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.match(OcamlParser.T__26);
				}
				break;
			case OcamlParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 58;
				this.constant_integer();
				}
				break;
			case OcamlParser.T__24:
			case OcamlParser.T__25:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 59;
				this.constant_boolean();
				}
				break;
			case OcamlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 60;
				this.constant_string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, OcamlParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueNameContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 64;
				this.value_name();
				}
				break;

			case 2:
				{
				_localctx = new ConstantIntContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 65;
				this.constant_integer();
				}
				break;

			case 3:
				{
				_localctx = new ConstantBoolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 66;
				this.constant_boolean();
				}
				break;

			case 4:
				{
				_localctx = new ConstantStrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 67;
				this.constant_string();
				}
				break;

			case 5:
				{
				_localctx = new ExprInParanthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 68;
				this.match(OcamlParser.T__0);
				this.state = 69;
				(_localctx as ExprInParanthesesContext)._inner = this.expr(0);
				this.state = 70;
				this.match(OcamlParser.T__1);
				}
				break;

			case 6:
				{
				_localctx = new ExprWithPrefixContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 72;
				this.match(OcamlParser.PREFIX_SYMBOL);
				this.state = 73;
				this.expr(8);
				}
				break;

			case 7:
				{
				_localctx = new ConditionalExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 74;
				this.match(OcamlParser.T__27);
				this.state = 75;
				(_localctx as ConditionalExprContext)._condition = this.expr(0);
				this.state = 76;
				this.match(OcamlParser.T__28);
				this.state = 77;
				(_localctx as ConditionalExprContext)._consequent = this.expr(0);
				this.state = 80;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 78;
					this.match(OcamlParser.T__29);
					this.state = 79;
					(_localctx as ConditionalExprContext)._alternative = this.expr(0);
					}
					break;
				}
				}
				break;

			case 8:
				{
				_localctx = new WhileLoopContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 82;
				this.match(OcamlParser.T__30);
				this.state = 83;
				(_localctx as WhileLoopContext)._condition = this.expr(0);
				this.state = 84;
				this.match(OcamlParser.T__31);
				this.state = 85;
				(_localctx as WhileLoopContext)._body = this.expr(0);
				this.state = 86;
				this.match(OcamlParser.T__32);
				}
				break;

			case 9:
				{
				_localctx = new ForLoopContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 88;
				this.match(OcamlParser.T__33);
				this.state = 89;
				(_localctx as ForLoopContext)._name = this.value_name();
				this.state = 90;
				this.match(OcamlParser.T__6);
				this.state = 91;
				(_localctx as ForLoopContext)._binding = this.expr(0);
				this.state = 92;
				_la = this._input.LA(1);
				if (!(_la === OcamlParser.T__34 || _la === OcamlParser.T__35)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 93;
				(_localctx as ForLoopContext)._end = this.expr(0);
				this.state = 94;
				this.match(OcamlParser.T__31);
				this.state = 95;
				(_localctx as ForLoopContext)._body = this.expr(0);
				this.state = 96;
				this.match(OcamlParser.T__32);
				}
				break;

			case 10:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 98;
				this.match(OcamlParser.T__37);
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 99;
					(_localctx as LambdaContext)._params = this.parameter();
					}
					}
					this.state = 102;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << OcamlParser.T__0) | (1 << OcamlParser.T__24) | (1 << OcamlParser.T__25) | (1 << OcamlParser.T__26))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (OcamlParser.LOWERCASE_IDENT - 44)) | (1 << (OcamlParser.INTEGER_LITERAL - 44)) | (1 << (OcamlParser.STRING_LITERAL - 44)))) !== 0));
				this.state = 104;
				this.match(OcamlParser.T__23);
				this.state = 105;
				(_localctx as LambdaContext)._body = this.expr(2);
				}
				break;

			case 11:
				{
				_localctx = new LetExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 107;
				this.match(OcamlParser.T__38);
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === OcamlParser.T__39) {
					{
					this.state = 108;
					this.match(OcamlParser.T__39);
					}
				}

				this.state = 111;
				(_localctx as LetExprContext)._name = this.pattern();
				this.state = 112;
				this.match(OcamlParser.T__6);
				this.state = 113;
				(_localctx as LetExprContext)._binding = this.expr(0);
				this.state = 114;
				this.match(OcamlParser.T__40);
				this.state = 115;
				(_localctx as LetExprContext)._in_context = this.expr(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 128;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 126;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryOpContext(new ExprContext(_parentctx, _parentState));
						(_localctx as BinaryOpContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, OcamlParser.RULE_expr);
						this.state = 119;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 120;
						(_localctx as BinaryOpContext)._operator = this.infix_op();
						this.state = 121;
						(_localctx as BinaryOpContext)._right = this.expr(8);
						}
						break;

					case 2:
						{
						_localctx = new ExprSemicolonExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ExprSemicolonExprContext)._first = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, OcamlParser.RULE_expr);
						this.state = 123;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 124;
						this.match(OcamlParser.T__36);
						this.state = 125;
						(_localctx as ExprSemicolonExprContext)._second = this.expr(4);
						}
						break;
					}
					}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, OcamlParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x035\x88\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x05\x02\x1E\n\x02\x03\x03\x03\x03\x05\x03\"\n" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x063\n\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n@\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vS\n\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x06\vg\n\v\r\v\x0E\vh\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\vp\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vx\n\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\x81\n\v\f\v\x0E\v\x84\v\v\x03\f\x03\f" +
		"\x03\f\x02\x02\x03\x14\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x05\x04\x02\x05\x1844\x03\x02" +
		"\x1B\x1C\x03\x02%&\x02\x93\x02\x1D\x03\x02\x02\x02\x04!\x03\x02\x02\x02" +
		"\x06#\x03\x02\x02\x02\b%\x03\x02\x02\x02\n2\x03\x02\x02\x02\f4\x03\x02" +
		"\x02\x02\x0E6\x03\x02\x02\x02\x108\x03\x02\x02\x02\x12?\x03\x02\x02\x02" +
		"\x14w\x03\x02\x02\x02\x16\x85\x03\x02\x02\x02\x18\x1E\x07.\x02\x02\x19" +
		"\x1A\x07\x03\x02\x02\x1A\x1B\x05\x04\x03\x02\x1B\x1C\x07\x04\x02\x02\x1C" +
		"\x1E\x03\x02\x02\x02\x1D\x18\x03\x02\x02\x02\x1D\x19\x03\x02\x02\x02\x1E" +
		"\x03\x03\x02\x02\x02\x1F\"\x075\x02\x02 \"\x05\x06\x04\x02!\x1F\x03\x02" +
		"\x02\x02! \x03\x02\x02\x02\"\x05\x03\x02\x02\x02#$\t\x02\x02\x02$\x07" +
		"\x03\x02\x02\x02%&\x07\x19\x02\x02&\'\x07/\x02\x02\'(\x05\n\x06\x02(\t" +
		"\x03\x02\x02\x02)*\x07\x05\x02\x02*+\x05\b\x05\x02+,\x05\n\x06\x02,3\x03" +
		"\x02\x02\x02-.\x07\x1A\x02\x02./\x05\b\x05\x02/0\x05\n\x06\x0203\x03\x02" +
		"\x02\x0213\x03\x02\x02\x022)\x03\x02\x02\x022-\x03\x02\x02\x0221\x03\x02" +
		"\x02\x023\v\x03\x02\x02\x0245\x070\x02\x025\r\x03\x02\x02\x0267\t\x03" +
		"\x02\x027\x0F\x03\x02\x02\x0289\x071\x02\x029\x11\x03\x02\x02\x02:@\x05" +
		"\x02\x02\x02;@\x07\x1D\x02\x02<@\x05\f\x07\x02=@\x05\x0E\b\x02>@\x05\x10" +
		"\t\x02?:\x03\x02\x02\x02?;\x03\x02\x02\x02?<\x03\x02\x02\x02?=\x03\x02" +
		"\x02\x02?>\x03\x02\x02\x02@\x13\x03\x02\x02\x02AB\b\v\x01\x02Bx\x05\x02" +
		"\x02\x02Cx\x05\f\x07\x02Dx\x05\x0E\b\x02Ex\x05\x10\t\x02FG\x07\x03\x02" +
		"\x02GH\x05\x14\v\x02HI\x07\x04\x02\x02Ix\x03\x02\x02\x02JK\x075\x02\x02" +
		"Kx\x05\x14\v\nLM\x07\x1E\x02\x02MN\x05\x14\v\x02NO\x07\x1F\x02\x02OR\x05" +
		"\x14\v\x02PQ\x07 \x02\x02QS\x05\x14\v\x02RP\x03\x02\x02\x02RS\x03\x02" +
		"\x02\x02Sx\x03\x02\x02\x02TU\x07!\x02\x02UV\x05\x14\v\x02VW\x07\"\x02" +
		"\x02WX\x05\x14\v\x02XY\x07#\x02\x02Yx\x03\x02\x02\x02Z[\x07$\x02\x02[" +
		"\\\x05\x02\x02\x02\\]\x07\t\x02\x02]^\x05\x14\v\x02^_\t\x04\x02\x02_`" +
		"\x05\x14\v\x02`a\x07\"\x02\x02ab\x05\x14\v\x02bc\x07#\x02\x02cx\x03\x02" +
		"\x02\x02df\x07(\x02\x02eg\x05\x16\f\x02fe\x03\x02\x02\x02gh\x03\x02\x02" +
		"\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x07\x1A\x02" +
		"\x02kl\x05\x14\v\x04lx\x03\x02\x02\x02mo\x07)\x02\x02np\x07*\x02\x02o" +
		"n\x03\x02\x02\x02op\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x05\x12\n\x02" +
		"rs\x07\t\x02\x02st\x05\x14\v\x02tu\x07+\x02\x02uv\x05\x14\v\x03vx\x03" +
		"\x02\x02\x02wA\x03\x02\x02\x02wC\x03\x02\x02\x02wD\x03\x02\x02\x02wE\x03" +
		"\x02\x02\x02wF\x03\x02\x02\x02wJ\x03\x02\x02\x02wL\x03\x02\x02\x02wT\x03" +
		"\x02\x02\x02wZ\x03\x02\x02\x02wd\x03\x02\x02\x02wm\x03\x02\x02\x02x\x82" +
		"\x03\x02\x02\x02yz\f\t\x02\x02z{\x05\x06\x04\x02{|\x05\x14\v\n|\x81\x03" +
		"\x02\x02\x02}~\f\x05\x02\x02~\x7F\x07\'\x02\x02\x7F\x81\x05\x14\v\x06" +
		"\x80y\x03\x02\x02\x02\x80}\x03\x02\x02\x02\x81\x84\x03\x02\x02\x02\x82" +
		"\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x15\x03\x02\x02\x02\x84" +
		"\x82\x03\x02\x02\x02\x85\x86\x05\x12\n\x02\x86\x17\x03\x02\x02\x02\f\x1D" +
		"!2?Rhow\x80\x82";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!OcamlParser.__ATN) {
			OcamlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(OcamlParser._serializedATN));
		}

		return OcamlParser.__ATN;
	}

}

export class Value_nameContext extends ParserRuleContext {
	public LOWERCASE_IDENT(): TerminalNode | undefined { return this.tryGetToken(OcamlParser.LOWERCASE_IDENT, 0); }
	public operator_name(): Operator_nameContext | undefined {
		return this.tryGetRuleContext(0, Operator_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_value_name; }
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterValue_name) {
			listener.enterValue_name(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitValue_name) {
			listener.exitValue_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitValue_name) {
			return visitor.visitValue_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operator_nameContext extends ParserRuleContext {
	public PREFIX_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(OcamlParser.PREFIX_SYMBOL, 0); }
	public infix_op(): Infix_opContext | undefined {
		return this.tryGetRuleContext(0, Infix_opContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_operator_name; }
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterOperator_name) {
			listener.enterOperator_name(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitOperator_name) {
			listener.exitOperator_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitOperator_name) {
			return visitor.visitOperator_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Infix_opContext extends ParserRuleContext {
	public INFIX_SYMBOL(): TerminalNode { return this.getToken(OcamlParser.INFIX_SYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_infix_op; }
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterInfix_op) {
			listener.enterInfix_op(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitInfix_op) {
			listener.exitInfix_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitInfix_op) {
			return visitor.visitInfix_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypexprContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(OcamlParser.IDENT, 0); }
	public typexpr_recur(): Typexpr_recurContext {
		return this.getRuleContext(0, Typexpr_recurContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_typexpr; }
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterTypexpr) {
			listener.enterTypexpr(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitTypexpr) {
			listener.exitTypexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitTypexpr) {
			return visitor.visitTypexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Typexpr_recurContext extends ParserRuleContext {
	public typexpr(): TypexprContext | undefined {
		return this.tryGetRuleContext(0, TypexprContext);
	}
	public typexpr_recur(): Typexpr_recurContext | undefined {
		return this.tryGetRuleContext(0, Typexpr_recurContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_typexpr_recur; }
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterTypexpr_recur) {
			listener.enterTypexpr_recur(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitTypexpr_recur) {
			listener.exitTypexpr_recur(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitTypexpr_recur) {
			return visitor.visitTypexpr_recur(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constant_integerContext extends ParserRuleContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(OcamlParser.INTEGER_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_constant_integer; }
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterConstant_integer) {
			listener.enterConstant_integer(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitConstant_integer) {
			listener.exitConstant_integer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitConstant_integer) {
			return visitor.visitConstant_integer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constant_booleanContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_constant_boolean; }
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterConstant_boolean) {
			listener.enterConstant_boolean(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitConstant_boolean) {
			listener.exitConstant_boolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitConstant_boolean) {
			return visitor.visitConstant_boolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constant_stringContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(OcamlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_constant_string; }
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterConstant_string) {
			listener.enterConstant_string(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitConstant_string) {
			listener.exitConstant_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitConstant_string) {
			return visitor.visitConstant_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	public _val!: Value_nameContext;
	public value_name(): Value_nameContext | undefined {
		return this.tryGetRuleContext(0, Value_nameContext);
	}
	public constant_integer(): Constant_integerContext | undefined {
		return this.tryGetRuleContext(0, Constant_integerContext);
	}
	public constant_boolean(): Constant_booleanContext | undefined {
		return this.tryGetRuleContext(0, Constant_booleanContext);
	}
	public constant_string(): Constant_stringContext | undefined {
		return this.tryGetRuleContext(0, Constant_stringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_pattern; }
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterPattern) {
			listener.enterPattern(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitPattern) {
			listener.exitPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitPattern) {
			return visitor.visitPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueNameContext extends ExprContext {
	public value_name(): Value_nameContext {
		return this.getRuleContext(0, Value_nameContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterValueName) {
			listener.enterValueName(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitValueName) {
			listener.exitValueName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitValueName) {
			return visitor.visitValueName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantIntContext extends ExprContext {
	public constant_integer(): Constant_integerContext {
		return this.getRuleContext(0, Constant_integerContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterConstantInt) {
			listener.enterConstantInt(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitConstantInt) {
			listener.exitConstantInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitConstantInt) {
			return visitor.visitConstantInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantBoolContext extends ExprContext {
	public constant_boolean(): Constant_booleanContext {
		return this.getRuleContext(0, Constant_booleanContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterConstantBool) {
			listener.enterConstantBool(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitConstantBool) {
			listener.exitConstantBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitConstantBool) {
			return visitor.visitConstantBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantStrContext extends ExprContext {
	public constant_string(): Constant_stringContext {
		return this.getRuleContext(0, Constant_stringContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterConstantStr) {
			listener.enterConstantStr(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitConstantStr) {
			listener.exitConstantStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitConstantStr) {
			return visitor.visitConstantStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprInParanthesesContext extends ExprContext {
	public _inner!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterExprInParantheses) {
			listener.enterExprInParantheses(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitExprInParantheses) {
			listener.exitExprInParantheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitExprInParantheses) {
			return visitor.visitExprInParantheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprWithPrefixContext extends ExprContext {
	public PREFIX_SYMBOL(): TerminalNode { return this.getToken(OcamlParser.PREFIX_SYMBOL, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterExprWithPrefix) {
			listener.enterExprWithPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitExprWithPrefix) {
			listener.exitExprWithPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitExprWithPrefix) {
			return visitor.visitExprWithPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryOpContext extends ExprContext {
	public _left!: ExprContext;
	public _operator!: Infix_opContext;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public infix_op(): Infix_opContext {
		return this.getRuleContext(0, Infix_opContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterBinaryOp) {
			listener.enterBinaryOp(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitBinaryOp) {
			listener.exitBinaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitBinaryOp) {
			return visitor.visitBinaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalExprContext extends ExprContext {
	public _condition!: ExprContext;
	public _consequent!: ExprContext;
	public _alternative!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterConditionalExpr) {
			listener.enterConditionalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitConditionalExpr) {
			listener.exitConditionalExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitConditionalExpr) {
			return visitor.visitConditionalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileLoopContext extends ExprContext {
	public _condition!: ExprContext;
	public _body!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterWhileLoop) {
			listener.enterWhileLoop(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitWhileLoop) {
			listener.exitWhileLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitWhileLoop) {
			return visitor.visitWhileLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForLoopContext extends ExprContext {
	public _name!: Value_nameContext;
	public _binding!: ExprContext;
	public _end!: ExprContext;
	public _body!: ExprContext;
	public value_name(): Value_nameContext {
		return this.getRuleContext(0, Value_nameContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterForLoop) {
			listener.enterForLoop(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitForLoop) {
			listener.exitForLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitForLoop) {
			return visitor.visitForLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprSemicolonExprContext extends ExprContext {
	public _first!: ExprContext;
	public _second!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterExprSemicolonExpr) {
			listener.enterExprSemicolonExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitExprSemicolonExpr) {
			listener.exitExprSemicolonExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitExprSemicolonExpr) {
			return visitor.visitExprSemicolonExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaContext extends ExprContext {
	public _params!: ParameterContext;
	public _body!: ExprContext;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetExprContext extends ExprContext {
	public _name!: PatternContext;
	public _binding!: ExprContext;
	public _in_context!: ExprContext;
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterLetExpr) {
			listener.enterLetExpr(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitLetExpr) {
			listener.exitLetExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitLetExpr) {
			return visitor.visitLetExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return OcamlParser.RULE_parameter; }
	// @Override
	public enterRule(listener: OcamlListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: OcamlListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: OcamlVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


