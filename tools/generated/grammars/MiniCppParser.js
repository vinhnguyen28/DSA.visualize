// Generated from grammars/MiniCpp.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniCppListener from './MiniCppListener.js';
import MiniCppVisitor from './MiniCppVisitor.js';

const serializedATN = [4,1,20,87,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,12,
0,27,9,0,1,0,1,0,1,1,1,1,3,1,33,8,1,1,2,1,2,1,2,1,2,3,2,39,8,2,1,2,1,2,1,
3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,5,7,57,8,7,10,7,12,
7,60,9,7,1,8,1,8,1,8,5,8,65,8,8,10,8,12,8,68,9,8,1,9,1,9,1,9,1,9,1,9,3,9,
75,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,85,8,10,1,10,0,0,11,
0,2,4,6,8,10,12,14,16,18,20,0,3,1,0,1,6,1,0,10,11,1,0,12,14,86,0,25,1,0,
0,0,2,32,1,0,0,0,4,34,1,0,0,0,6,42,1,0,0,0,8,47,1,0,0,0,10,49,1,0,0,0,12,
51,1,0,0,0,14,53,1,0,0,0,16,61,1,0,0,0,18,74,1,0,0,0,20,84,1,0,0,0,22,24,
3,2,1,0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,
0,0,0,27,25,1,0,0,0,28,29,5,0,0,1,29,1,1,0,0,0,30,33,3,4,2,0,31,33,3,6,3,
0,32,30,1,0,0,0,32,31,1,0,0,0,33,3,1,0,0,0,34,35,3,8,4,0,35,38,3,10,5,0,
36,37,5,9,0,0,37,39,3,12,6,0,38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,
41,5,17,0,0,41,5,1,0,0,0,42,43,5,18,0,0,43,44,5,9,0,0,44,45,3,12,6,0,45,
46,5,17,0,0,46,7,1,0,0,0,47,48,7,0,0,0,48,9,1,0,0,0,49,50,5,18,0,0,50,11,
1,0,0,0,51,52,3,14,7,0,52,13,1,0,0,0,53,58,3,16,8,0,54,55,7,1,0,0,55,57,
3,16,8,0,56,54,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,15,1,
0,0,0,60,58,1,0,0,0,61,66,3,18,9,0,62,63,7,2,0,0,63,65,3,18,9,0,64,62,1,
0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,17,1,0,0,0,68,66,1,0,
0,0,69,75,3,20,10,0,70,71,5,10,0,0,71,75,3,18,9,0,72,73,5,11,0,0,73,75,3,
18,9,0,74,69,1,0,0,0,74,70,1,0,0,0,74,72,1,0,0,0,75,19,1,0,0,0,76,85,5,19,
0,0,77,85,5,7,0,0,78,85,5,8,0,0,79,85,5,18,0,0,80,81,5,15,0,0,81,82,3,12,
6,0,82,83,5,16,0,0,83,85,1,0,0,0,84,76,1,0,0,0,84,77,1,0,0,0,84,78,1,0,0,
0,84,79,1,0,0,0,84,80,1,0,0,0,85,21,1,0,0,0,7,25,32,38,58,66,74,84];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniCppParser extends antlr4.Parser {

    static grammarFileName = "MiniCpp.g4";
    static literalNames = [ null, "'int'", "'double'", "'float'", "'bool'", 
                            "'char'", "'string'", "'true'", "'false'", "'='", 
                            "'+'", "'-'", "'*'", "'/'", "'%'", "'('", "')'", 
                            "';'" ];
    static symbolicNames = [ null, "INT", "DOUBLE", "FLOAT", "BOOL", "CHAR", 
                             "STRING", "TRUE", "FALSE", "ASSIGN", "PLUS", 
                             "MINUS", "MULTIPLY", "DIVIDE", "MOD", "LPAREN", 
                             "RPAREN", "SEMI", "Identifier", "Number", "WS" ];
    static ruleNames = [ "program", "statement", "declaration", "assignment", 
                         "type", "declarator", "expression", "additiveExpression", 
                         "multiplicativeExpression", "unaryExpression", 
                         "primaryExpression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniCppParser.ruleNames;
        this.literalNames = MiniCppParser.literalNames;
        this.symbolicNames = MiniCppParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniCppParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 262270) !== 0)) {
	            this.state = 22;
	            this.statement();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
	        this.match(MiniCppParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniCppParser.RULE_statement);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.declaration();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.assignment();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniCppParser.RULE_declaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.type();
	        this.state = 35;
	        this.declarator();
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 36;
	            this.match(MiniCppParser.ASSIGN);
	            this.state = 37;
	            this.expression();
	        }

	        this.state = 40;
	        this.match(MiniCppParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniCppParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(MiniCppParser.Identifier);
	        this.state = 43;
	        this.match(MiniCppParser.ASSIGN);
	        this.state = 44;
	        this.expression();
	        this.state = 45;
	        this.match(MiniCppParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniCppParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 126) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declarator() {
	    let localctx = new DeclaratorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniCppParser.RULE_declarator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(MiniCppParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniCppParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.additiveExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniCppParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.multiplicativeExpression();
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10 || _la===11) {
	            this.state = 54;
	            _la = this._input.LA(1);
	            if(!(_la===10 || _la===11)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 55;
	            this.multiplicativeExpression();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiniCppParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.unaryExpression();
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0)) {
	            this.state = 62;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 63;
	            this.unaryExpression();
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unaryExpression() {
	    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiniCppParser.RULE_unaryExpression);
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 8:
	        case 15:
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.primaryExpression();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.match(MiniCppParser.PLUS);
	            this.state = 71;
	            this.unaryExpression();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.match(MiniCppParser.MINUS);
	            this.state = 73;
	            this.unaryExpression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiniCppParser.RULE_primaryExpression);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.match(MiniCppParser.Number);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.match(MiniCppParser.TRUE);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 78;
	            this.match(MiniCppParser.FALSE);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 79;
	            this.match(MiniCppParser.Identifier);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 80;
	            this.match(MiniCppParser.LPAREN);
	            this.state = 81;
	            this.expression();
	            this.state = 82;
	            this.match(MiniCppParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniCppParser.EOF = antlr4.Token.EOF;
MiniCppParser.INT = 1;
MiniCppParser.DOUBLE = 2;
MiniCppParser.FLOAT = 3;
MiniCppParser.BOOL = 4;
MiniCppParser.CHAR = 5;
MiniCppParser.STRING = 6;
MiniCppParser.TRUE = 7;
MiniCppParser.FALSE = 8;
MiniCppParser.ASSIGN = 9;
MiniCppParser.PLUS = 10;
MiniCppParser.MINUS = 11;
MiniCppParser.MULTIPLY = 12;
MiniCppParser.DIVIDE = 13;
MiniCppParser.MOD = 14;
MiniCppParser.LPAREN = 15;
MiniCppParser.RPAREN = 16;
MiniCppParser.SEMI = 17;
MiniCppParser.Identifier = 18;
MiniCppParser.Number = 19;
MiniCppParser.WS = 20;

MiniCppParser.RULE_program = 0;
MiniCppParser.RULE_statement = 1;
MiniCppParser.RULE_declaration = 2;
MiniCppParser.RULE_assignment = 3;
MiniCppParser.RULE_type = 4;
MiniCppParser.RULE_declarator = 5;
MiniCppParser.RULE_expression = 6;
MiniCppParser.RULE_additiveExpression = 7;
MiniCppParser.RULE_multiplicativeExpression = 8;
MiniCppParser.RULE_unaryExpression = 9;
MiniCppParser.RULE_primaryExpression = 10;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_program;
    }

	EOF() {
	    return this.getToken(MiniCppParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_statement;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_declaration;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	declarator() {
	    return this.getTypedRuleContext(DeclaratorContext,0);
	};

	SEMI() {
	    return this.getToken(MiniCppParser.SEMI, 0);
	};

	ASSIGN() {
	    return this.getToken(MiniCppParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_assignment;
    }

	Identifier() {
	    return this.getToken(MiniCppParser.Identifier, 0);
	};

	ASSIGN() {
	    return this.getToken(MiniCppParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(MiniCppParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_type;
    }

	INT() {
	    return this.getToken(MiniCppParser.INT, 0);
	};

	DOUBLE() {
	    return this.getToken(MiniCppParser.DOUBLE, 0);
	};

	FLOAT() {
	    return this.getToken(MiniCppParser.FLOAT, 0);
	};

	BOOL() {
	    return this.getToken(MiniCppParser.BOOL, 0);
	};

	CHAR() {
	    return this.getToken(MiniCppParser.CHAR, 0);
	};

	STRING() {
	    return this.getToken(MiniCppParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaratorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_declarator;
    }

	Identifier() {
	    return this.getToken(MiniCppParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterDeclarator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitDeclarator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitDeclarator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_expression;
    }

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_additiveExpression;
    }

	multiplicativeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.PLUS);
	    } else {
	        return this.getToken(MiniCppParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.MINUS);
	    } else {
	        return this.getToken(MiniCppParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_multiplicativeExpression;
    }

	unaryExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnaryExpressionContext);
	    } else {
	        return this.getTypedRuleContext(UnaryExpressionContext,i);
	    }
	};

	MULTIPLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.MULTIPLY);
	    } else {
	        return this.getToken(MiniCppParser.MULTIPLY, i);
	    }
	};


	DIVIDE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.DIVIDE);
	    } else {
	        return this.getToken(MiniCppParser.DIVIDE, i);
	    }
	};


	MOD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.MOD);
	    } else {
	        return this.getToken(MiniCppParser.MOD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_unaryExpression;
    }

	primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
	};

	PLUS() {
	    return this.getToken(MiniCppParser.PLUS, 0);
	};

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	MINUS() {
	    return this.getToken(MiniCppParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterUnaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitUnaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitUnaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_primaryExpression;
    }

	Number() {
	    return this.getToken(MiniCppParser.Number, 0);
	};

	TRUE() {
	    return this.getToken(MiniCppParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(MiniCppParser.FALSE, 0);
	};

	Identifier() {
	    return this.getToken(MiniCppParser.Identifier, 0);
	};

	LPAREN() {
	    return this.getToken(MiniCppParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniCppParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterPrimaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitPrimaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitPrimaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniCppParser.ProgramContext = ProgramContext; 
MiniCppParser.StatementContext = StatementContext; 
MiniCppParser.DeclarationContext = DeclarationContext; 
MiniCppParser.AssignmentContext = AssignmentContext; 
MiniCppParser.TypeContext = TypeContext; 
MiniCppParser.DeclaratorContext = DeclaratorContext; 
MiniCppParser.ExpressionContext = ExpressionContext; 
MiniCppParser.AdditiveExpressionContext = AdditiveExpressionContext; 
MiniCppParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
MiniCppParser.UnaryExpressionContext = UnaryExpressionContext; 
MiniCppParser.PrimaryExpressionContext = PrimaryExpressionContext; 
