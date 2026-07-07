// Generated from grammars/MiniCpp.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniCppListener from './MiniCppListener.js';
import MiniCppVisitor from './MiniCppVisitor.js';

const serializedATN = [4,1,52,376,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,5,0,
70,8,0,10,0,12,0,73,9,0,1,0,1,0,1,1,1,1,1,1,3,1,80,8,1,1,2,1,2,1,2,1,2,5,
2,86,8,2,10,2,12,2,89,9,2,1,2,1,2,1,2,1,3,1,3,5,3,96,8,3,10,3,12,3,99,9,
3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,108,8,4,1,4,1,4,1,4,1,5,1,5,5,5,115,8,
5,10,5,12,5,118,9,5,1,5,1,5,5,5,122,8,5,10,5,12,5,125,9,5,3,5,127,8,5,1,
6,1,6,1,6,5,6,132,8,6,10,6,12,6,135,9,6,1,7,1,7,5,7,139,8,7,10,7,12,7,142,
9,7,1,7,1,7,1,8,1,8,1,8,5,8,149,8,8,10,8,12,8,152,9,8,1,9,1,9,5,9,156,8,
9,10,9,12,9,159,9,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
3,10,172,8,10,1,11,1,11,5,11,176,8,11,10,11,12,11,179,9,11,1,11,1,11,1,11,
3,11,184,8,11,1,11,1,11,1,12,1,12,1,12,3,12,191,8,12,1,12,3,12,194,8,12,
1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,208,8,14,
1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,3,16,219,8,16,1,16,1,16,3,16,
223,8,16,1,16,1,16,3,16,227,8,16,1,16,1,16,1,16,1,17,1,17,5,17,234,8,17,
10,17,12,17,237,9,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,247,8,
17,1,18,1,18,3,18,251,8,18,1,18,1,18,1,19,1,19,1,19,3,19,258,8,19,1,19,1,
19,1,19,1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,23,5,23,273,8,23,
10,23,12,23,276,9,23,1,24,1,24,1,24,5,24,281,8,24,10,24,12,24,284,9,24,1,
25,1,25,1,25,5,25,289,8,25,10,25,12,25,292,9,25,1,26,1,26,1,26,5,26,297,
8,26,10,26,12,26,300,9,26,1,27,1,27,1,27,5,27,305,8,27,10,27,12,27,308,9,
27,1,28,1,28,1,28,5,28,313,8,28,10,28,12,28,316,9,28,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,330,8,29,1,30,1,30,1,30,1,30,
1,30,1,30,3,30,338,8,30,1,31,1,31,5,31,342,8,31,10,31,12,31,345,9,31,1,32,
1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,357,8,32,1,32,1,32,1,32,
3,32,362,8,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,374,
8,33,1,33,0,0,34,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,66,0,5,2,0,1,6,47,47,1,0,19,20,2,
0,21,22,34,35,1,0,29,30,1,0,31,33,400,0,71,1,0,0,0,2,79,1,0,0,0,4,81,1,0,
0,0,6,93,1,0,0,0,8,103,1,0,0,0,10,126,1,0,0,0,12,128,1,0,0,0,14,136,1,0,
0,0,16,145,1,0,0,0,18,153,1,0,0,0,20,171,1,0,0,0,22,173,1,0,0,0,24,187,1,
0,0,0,26,195,1,0,0,0,28,200,1,0,0,0,30,209,1,0,0,0,32,215,1,0,0,0,34,246,
1,0,0,0,36,248,1,0,0,0,38,254,1,0,0,0,40,262,1,0,0,0,42,265,1,0,0,0,44,267,
1,0,0,0,46,269,1,0,0,0,48,277,1,0,0,0,50,285,1,0,0,0,52,293,1,0,0,0,54,301,
1,0,0,0,56,309,1,0,0,0,58,329,1,0,0,0,60,331,1,0,0,0,62,339,1,0,0,0,64,361,
1,0,0,0,66,373,1,0,0,0,68,70,3,2,1,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,
0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,5,0,0,1,75,1,1,0,0,
0,76,80,3,4,2,0,77,80,3,8,4,0,78,80,3,22,11,0,79,76,1,0,0,0,79,77,1,0,0,
0,79,78,1,0,0,0,80,3,1,0,0,0,81,82,5,11,0,0,82,83,5,47,0,0,83,87,5,41,0,
0,84,86,3,6,3,0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,
88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,42,0,0,91,92,5,45,0,0,92,5,1,0,0,0,93,
97,3,42,21,0,94,96,5,31,0,0,95,94,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,97,
98,1,0,0,0,98,100,1,0,0,0,99,97,1,0,0,0,100,101,3,24,12,0,101,102,5,45,0,
0,102,7,1,0,0,0,103,104,3,10,5,0,104,105,5,47,0,0,105,107,5,39,0,0,106,108,
3,12,6,0,107,106,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,110,5,40,0,
0,110,111,3,18,9,0,111,9,1,0,0,0,112,116,3,42,21,0,113,115,5,31,0,0,114,
113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,127,1,0,
0,0,118,116,1,0,0,0,119,123,5,7,0,0,120,122,5,31,0,0,121,120,1,0,0,0,122,
125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,127,1,0,0,0,125,123,1,0,
0,0,126,112,1,0,0,0,126,119,1,0,0,0,127,11,1,0,0,0,128,133,3,14,7,0,129,
130,5,46,0,0,130,132,3,14,7,0,131,129,1,0,0,0,132,135,1,0,0,0,133,131,1,
0,0,0,133,134,1,0,0,0,134,13,1,0,0,0,135,133,1,0,0,0,136,140,3,42,21,0,137,
139,5,31,0,0,138,137,1,0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,
0,0,141,143,1,0,0,0,142,140,1,0,0,0,143,144,5,47,0,0,144,15,1,0,0,0,145,
150,3,44,22,0,146,147,5,46,0,0,147,149,3,44,22,0,148,146,1,0,0,0,149,152,
1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,17,1,0,0,0,152,150,1,0,0,0,153,
157,5,41,0,0,154,156,3,20,10,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,
0,0,0,157,158,1,0,0,0,158,160,1,0,0,0,159,157,1,0,0,0,160,161,5,42,0,0,161,
19,1,0,0,0,162,172,3,22,11,0,163,172,3,26,13,0,164,172,3,28,14,0,165,172,
3,30,15,0,166,172,3,32,16,0,167,172,3,36,18,0,168,172,3,38,19,0,169,172,
3,40,20,0,170,172,3,18,9,0,171,162,1,0,0,0,171,163,1,0,0,0,171,164,1,0,0,
0,171,165,1,0,0,0,171,166,1,0,0,0,171,167,1,0,0,0,171,168,1,0,0,0,171,169,
1,0,0,0,171,170,1,0,0,0,172,21,1,0,0,0,173,177,3,42,21,0,174,176,5,31,0,
0,175,174,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,180,
1,0,0,0,179,177,1,0,0,0,180,183,3,24,12,0,181,182,5,28,0,0,182,184,3,44,
22,0,183,181,1,0,0,0,183,184,1,0,0,0,184,185,1,0,0,0,185,186,5,45,0,0,186,
23,1,0,0,0,187,193,5,47,0,0,188,190,5,43,0,0,189,191,3,44,22,0,190,189,1,
0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,194,5,44,0,0,193,188,1,0,0,0,193,
194,1,0,0,0,194,25,1,0,0,0,195,196,3,58,29,0,196,197,5,28,0,0,197,198,3,
44,22,0,198,199,5,45,0,0,199,27,1,0,0,0,200,201,5,12,0,0,201,202,5,39,0,
0,202,203,3,44,22,0,203,204,5,40,0,0,204,207,3,20,10,0,205,206,5,13,0,0,
206,208,3,20,10,0,207,205,1,0,0,0,207,208,1,0,0,0,208,29,1,0,0,0,209,210,
5,14,0,0,210,211,5,39,0,0,211,212,3,44,22,0,212,213,5,40,0,0,213,214,3,20,
10,0,214,31,1,0,0,0,215,216,5,15,0,0,216,218,5,39,0,0,217,219,3,34,17,0,
218,217,1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,222,5,45,0,0,221,223,
3,44,22,0,222,221,1,0,0,0,222,223,1,0,0,0,223,224,1,0,0,0,224,226,5,45,0,
0,225,227,3,44,22,0,226,225,1,0,0,0,226,227,1,0,0,0,227,228,1,0,0,0,228,
229,5,40,0,0,229,230,3,20,10,0,230,33,1,0,0,0,231,235,3,42,21,0,232,234,
5,31,0,0,233,232,1,0,0,0,234,237,1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,
236,238,1,0,0,0,237,235,1,0,0,0,238,239,3,24,12,0,239,240,5,28,0,0,240,241,
3,44,22,0,241,247,1,0,0,0,242,243,3,58,29,0,243,244,5,28,0,0,244,245,3,44,
22,0,245,247,1,0,0,0,246,231,1,0,0,0,246,242,1,0,0,0,247,35,1,0,0,0,248,
250,5,16,0,0,249,251,3,44,22,0,250,249,1,0,0,0,250,251,1,0,0,0,251,252,1,
0,0,0,252,253,5,45,0,0,253,37,1,0,0,0,254,257,5,18,0,0,255,256,5,43,0,0,
256,258,5,44,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,259,1,0,0,0,259,260,
3,44,22,0,260,261,5,45,0,0,261,39,1,0,0,0,262,263,3,44,22,0,263,264,5,45,
0,0,264,41,1,0,0,0,265,266,7,0,0,0,266,43,1,0,0,0,267,268,3,46,23,0,268,
45,1,0,0,0,269,274,3,48,24,0,270,271,5,24,0,0,271,273,3,48,24,0,272,270,
1,0,0,0,273,276,1,0,0,0,274,272,1,0,0,0,274,275,1,0,0,0,275,47,1,0,0,0,276,
274,1,0,0,0,277,282,3,50,25,0,278,279,5,23,0,0,279,281,3,50,25,0,280,278,
1,0,0,0,281,284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,49,1,0,0,0,284,
282,1,0,0,0,285,290,3,52,26,0,286,287,7,1,0,0,287,289,3,52,26,0,288,286,
1,0,0,0,289,292,1,0,0,0,290,288,1,0,0,0,290,291,1,0,0,0,291,51,1,0,0,0,292,
290,1,0,0,0,293,298,3,54,27,0,294,295,7,2,0,0,295,297,3,54,27,0,296,294,
1,0,0,0,297,300,1,0,0,0,298,296,1,0,0,0,298,299,1,0,0,0,299,53,1,0,0,0,300,
298,1,0,0,0,301,306,3,56,28,0,302,303,7,3,0,0,303,305,3,56,28,0,304,302,
1,0,0,0,305,308,1,0,0,0,306,304,1,0,0,0,306,307,1,0,0,0,307,55,1,0,0,0,308,
306,1,0,0,0,309,314,3,58,29,0,310,311,7,4,0,0,311,313,3,58,29,0,312,310,
1,0,0,0,313,316,1,0,0,0,314,312,1,0,0,0,314,315,1,0,0,0,315,57,1,0,0,0,316,
314,1,0,0,0,317,330,3,62,31,0,318,319,5,29,0,0,319,330,3,58,29,0,320,321,
5,30,0,0,321,330,3,58,29,0,322,323,5,36,0,0,323,330,3,58,29,0,324,325,5,
37,0,0,325,330,3,58,29,0,326,327,5,31,0,0,327,330,3,58,29,0,328,330,3,60,
30,0,329,317,1,0,0,0,329,318,1,0,0,0,329,320,1,0,0,0,329,322,1,0,0,0,329,
324,1,0,0,0,329,326,1,0,0,0,329,328,1,0,0,0,330,59,1,0,0,0,331,332,5,17,
0,0,332,337,3,42,21,0,333,334,5,43,0,0,334,335,3,44,22,0,335,336,5,44,0,
0,336,338,1,0,0,0,337,333,1,0,0,0,337,338,1,0,0,0,338,61,1,0,0,0,339,343,
3,66,33,0,340,342,3,64,32,0,341,340,1,0,0,0,342,345,1,0,0,0,343,341,1,0,
0,0,343,344,1,0,0,0,344,63,1,0,0,0,345,343,1,0,0,0,346,347,5,38,0,0,347,
362,5,47,0,0,348,349,5,25,0,0,349,362,5,47,0,0,350,351,5,43,0,0,351,352,
3,44,22,0,352,353,5,44,0,0,353,362,1,0,0,0,354,356,5,39,0,0,355,357,3,16,
8,0,356,355,1,0,0,0,356,357,1,0,0,0,357,358,1,0,0,0,358,362,5,40,0,0,359,
362,5,26,0,0,360,362,5,27,0,0,361,346,1,0,0,0,361,348,1,0,0,0,361,350,1,
0,0,0,361,354,1,0,0,0,361,359,1,0,0,0,361,360,1,0,0,0,362,65,1,0,0,0,363,
374,5,48,0,0,364,374,5,49,0,0,365,374,5,8,0,0,366,374,5,9,0,0,367,374,5,
10,0,0,368,374,5,47,0,0,369,370,5,39,0,0,370,371,3,44,22,0,371,372,5,40,
0,0,372,374,1,0,0,0,373,363,1,0,0,0,373,364,1,0,0,0,373,365,1,0,0,0,373,
366,1,0,0,0,373,367,1,0,0,0,373,368,1,0,0,0,373,369,1,0,0,0,374,67,1,0,0,
0,37,71,79,87,97,107,116,123,126,133,140,150,157,171,177,183,190,193,207,
218,222,226,235,246,250,257,274,282,290,298,306,314,329,337,343,356,361,
373];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniCppParser extends antlr4.Parser {

    static grammarFileName = "MiniCpp.g4";
    static literalNames = [ null, "'int'", "'double'", "'float'", "'bool'", 
                            "'char'", "'string'", "'void'", "'true'", "'false'", 
                            "'nullptr'", "'struct'", "'if'", "'else'", "'while'", 
                            "'for'", "'return'", "'new'", "'delete'", "'=='", 
                            "'!='", "'<='", "'>='", "'&&'", "'||'", "'->'", 
                            "'++'", "'--'", "'='", "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'<'", "'>'", "'!'", "'&'", "'.'", 
                            "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", 
                            "','" ];
    static symbolicNames = [ null, "INT", "DOUBLE", "FLOAT", "BOOL", "CHAR", 
                             "STRING", "VOID", "TRUE", "FALSE", "NULLPTR", 
                             "STRUCT", "IF", "ELSE", "WHILE", "FOR", "RETURN", 
                             "NEW", "DELETE", "EQ", "NEQ", "LE", "GE", "AND", 
                             "OR", "ARROW", "INCREMENT", "DECREMENT", "ASSIGN", 
                             "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "MOD", 
                             "LT", "GT", "NOT", "AMPERSAND", "DOT", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "LBRACKET", "RBRACKET", 
                             "SEMI", "COMMA", "Identifier", "Number", "StringLiteral", 
                             "LINE_COMMENT", "BLOCK_COMMENT", "WS" ];
    static ruleNames = [ "program", "topLevelDeclaration", "structDeclaration", 
                         "structMember", "functionDeclaration", "returnType", 
                         "parameterList", "parameter", "argumentList", "block", 
                         "statement", "declaration", "declarator", "assignment", 
                         "ifStatement", "whileStatement", "forStatement", 
                         "forInit", "returnStatement", "deleteStatement", 
                         "expressionStatement", "type", "expression", "logicalOrExpression", 
                         "logicalAndExpression", "equalityExpression", "relationalExpression", 
                         "additiveExpression", "multiplicativeExpression", 
                         "unaryExpression", "newExpression", "postfixExpression", 
                         "postfixOp", "primaryExpression" ];

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
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2302) !== 0) || _la===47) {
	            this.state = 68;
	            this.topLevelDeclaration();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 74;
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



	topLevelDeclaration() {
	    let localctx = new TopLevelDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniCppParser.RULE_topLevelDeclaration);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.structDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.functionDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 78;
	            this.declaration();
	            break;

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



	structDeclaration() {
	    let localctx = new StructDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniCppParser.RULE_structDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(MiniCppParser.STRUCT);
	        this.state = 82;
	        this.match(MiniCppParser.Identifier);
	        this.state = 83;
	        this.match(MiniCppParser.LBRACE);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 126) !== 0) || _la===47) {
	            this.state = 84;
	            this.structMember();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(MiniCppParser.RBRACE);
	        this.state = 91;
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



	structMember() {
	    let localctx = new StructMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniCppParser.RULE_structMember);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.type();
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 94;
	            this.match(MiniCppParser.MULTIPLY);
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this.declarator();
	        this.state = 101;
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



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniCppParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.returnType();
	        this.state = 104;
	        this.match(MiniCppParser.Identifier);
	        this.state = 105;
	        this.match(MiniCppParser.LPAREN);
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 126) !== 0) || _la===47) {
	            this.state = 106;
	            this.parameterList();
	        }

	        this.state = 109;
	        this.match(MiniCppParser.RPAREN);
	        this.state = 110;
	        this.block();
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



	returnType() {
	    let localctx = new ReturnTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniCppParser.RULE_returnType);
	    var _la = 0;
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 112;
	            this.type();
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===31) {
	                this.state = 113;
	                this.match(MiniCppParser.MULTIPLY);
	                this.state = 118;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.match(MiniCppParser.VOID);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===31) {
	                this.state = 120;
	                this.match(MiniCppParser.MULTIPLY);
	                this.state = 125;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniCppParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.parameter();
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46) {
	            this.state = 129;
	            this.match(MiniCppParser.COMMA);
	            this.state = 130;
	            this.parameter();
	            this.state = 135;
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



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniCppParser.RULE_parameter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.type();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 137;
	            this.match(MiniCppParser.MULTIPLY);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 143;
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



	argumentList() {
	    let localctx = new ArgumentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiniCppParser.RULE_argumentList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.expression();
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46) {
	            this.state = 146;
	            this.match(MiniCppParser.COMMA);
	            this.state = 147;
	            this.expression();
	            this.state = 152;
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiniCppParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(MiniCppParser.LBRACE);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758610302) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 14379) !== 0)) {
	            this.state = 154;
	            this.statement();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 160;
	        this.match(MiniCppParser.RBRACE);
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
	    this.enterRule(localctx, 20, MiniCppParser.RULE_statement);
	    try {
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 164;
	            this.ifStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 165;
	            this.whileStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 166;
	            this.forStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 167;
	            this.returnStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 168;
	            this.deleteStatement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 169;
	            this.expressionStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 170;
	            this.block();
	            break;

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
	    this.enterRule(localctx, 22, MiniCppParser.RULE_declaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.type();
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 174;
	            this.match(MiniCppParser.MULTIPLY);
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 180;
	        this.declarator();
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 181;
	            this.match(MiniCppParser.ASSIGN);
	            this.state = 182;
	            this.expression();
	        }

	        this.state = 185;
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



	declarator() {
	    let localctx = new DeclaratorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MiniCppParser.RULE_declarator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(MiniCppParser.Identifier);
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 188;
	            this.match(MiniCppParser.LBRACKET);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758229248) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 14347) !== 0)) {
	                this.state = 189;
	                this.expression();
	            }

	            this.state = 192;
	            this.match(MiniCppParser.RBRACKET);
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MiniCppParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.unaryExpression();
	        this.state = 196;
	        this.match(MiniCppParser.ASSIGN);
	        this.state = 197;
	        this.expression();
	        this.state = 198;
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MiniCppParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(MiniCppParser.IF);
	        this.state = 201;
	        this.match(MiniCppParser.LPAREN);
	        this.state = 202;
	        this.expression();
	        this.state = 203;
	        this.match(MiniCppParser.RPAREN);
	        this.state = 204;
	        this.statement();
	        this.state = 207;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 205;
	            this.match(MiniCppParser.ELSE);
	            this.state = 206;
	            this.statement();

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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MiniCppParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(MiniCppParser.WHILE);
	        this.state = 210;
	        this.match(MiniCppParser.LPAREN);
	        this.state = 211;
	        this.expression();
	        this.state = 212;
	        this.match(MiniCppParser.RPAREN);
	        this.state = 213;
	        this.statement();
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



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MiniCppParser.RULE_forStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(MiniCppParser.FOR);
	        this.state = 216;
	        this.match(MiniCppParser.LPAREN);
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758229374) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 14347) !== 0)) {
	            this.state = 217;
	            this.forInit();
	        }

	        this.state = 220;
	        this.match(MiniCppParser.SEMI);
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758229248) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 14347) !== 0)) {
	            this.state = 221;
	            this.expression();
	        }

	        this.state = 224;
	        this.match(MiniCppParser.SEMI);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758229248) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 14347) !== 0)) {
	            this.state = 225;
	            this.expression();
	        }

	        this.state = 228;
	        this.match(MiniCppParser.RPAREN);
	        this.state = 229;
	        this.statement();
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



	forInit() {
	    let localctx = new ForInitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MiniCppParser.RULE_forInit);
	    var _la = 0;
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 231;
	            this.type();
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===31) {
	                this.state = 232;
	                this.match(MiniCppParser.MULTIPLY);
	                this.state = 237;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 238;
	            this.declarator();
	            this.state = 239;
	            this.match(MiniCppParser.ASSIGN);
	            this.state = 240;
	            this.expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 242;
	            this.unaryExpression();
	            this.state = 243;
	            this.match(MiniCppParser.ASSIGN);
	            this.state = 244;
	            this.expression();
	            break;

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



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, MiniCppParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(MiniCppParser.RETURN);
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758229248) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 14347) !== 0)) {
	            this.state = 249;
	            this.expression();
	        }

	        this.state = 252;
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



	deleteStatement() {
	    let localctx = new DeleteStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MiniCppParser.RULE_deleteStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(MiniCppParser.DELETE);
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 255;
	            this.match(MiniCppParser.LBRACKET);
	            this.state = 256;
	            this.match(MiniCppParser.RBRACKET);
	        }

	        this.state = 259;
	        this.expression();
	        this.state = 260;
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



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, MiniCppParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.expression();
	        this.state = 263;
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
	    this.enterRule(localctx, 42, MiniCppParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 126) !== 0) || _la===47)) {
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, MiniCppParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.logicalOrExpression();
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



	logicalOrExpression() {
	    let localctx = new LogicalOrExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, MiniCppParser.RULE_logicalOrExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.logicalAndExpression();
	        this.state = 274;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24) {
	            this.state = 270;
	            this.match(MiniCppParser.OR);
	            this.state = 271;
	            this.logicalAndExpression();
	            this.state = 276;
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



	logicalAndExpression() {
	    let localctx = new LogicalAndExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, MiniCppParser.RULE_logicalAndExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.equalityExpression();
	        this.state = 282;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 278;
	            this.match(MiniCppParser.AND);
	            this.state = 279;
	            this.equalityExpression();
	            this.state = 284;
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



	equalityExpression() {
	    let localctx = new EqualityExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, MiniCppParser.RULE_equalityExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.relationalExpression();
	        this.state = 290;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19 || _la===20) {
	            this.state = 286;
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===20)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 287;
	            this.relationalExpression();
	            this.state = 292;
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



	relationalExpression() {
	    let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, MiniCppParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.additiveExpression();
	        this.state = 298;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 21)) & ~0x1f) === 0 && ((1 << (_la - 21)) & 24579) !== 0)) {
	            this.state = 294;
	            _la = this._input.LA(1);
	            if(!(((((_la - 21)) & ~0x1f) === 0 && ((1 << (_la - 21)) & 24579) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 295;
	            this.additiveExpression();
	            this.state = 300;
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



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, MiniCppParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.multiplicativeExpression();
	        this.state = 306;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29 || _la===30) {
	            this.state = 302;
	            _la = this._input.LA(1);
	            if(!(_la===29 || _la===30)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 303;
	            this.multiplicativeExpression();
	            this.state = 308;
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
	    this.enterRule(localctx, 56, MiniCppParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.unaryExpression();
	        this.state = 314;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	            this.state = 310;
	            _la = this._input.LA(1);
	            if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 311;
	            this.unaryExpression();
	            this.state = 316;
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
	    this.enterRule(localctx, 58, MiniCppParser.RULE_unaryExpression);
	    try {
	        this.state = 329;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	        case 10:
	        case 39:
	        case 47:
	        case 48:
	        case 49:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 317;
	            this.postfixExpression();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 318;
	            this.match(MiniCppParser.PLUS);
	            this.state = 319;
	            this.unaryExpression();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 320;
	            this.match(MiniCppParser.MINUS);
	            this.state = 321;
	            this.unaryExpression();
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 322;
	            this.match(MiniCppParser.NOT);
	            this.state = 323;
	            this.unaryExpression();
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 324;
	            this.match(MiniCppParser.AMPERSAND);
	            this.state = 325;
	            this.unaryExpression();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 326;
	            this.match(MiniCppParser.MULTIPLY);
	            this.state = 327;
	            this.unaryExpression();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 328;
	            this.newExpression();
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



	newExpression() {
	    let localctx = new NewExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, MiniCppParser.RULE_newExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.match(MiniCppParser.NEW);
	        this.state = 332;
	        this.type();
	        this.state = 337;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 333;
	            this.match(MiniCppParser.LBRACKET);
	            this.state = 334;
	            this.expression();
	            this.state = 335;
	            this.match(MiniCppParser.RBRACKET);
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



	postfixExpression() {
	    let localctx = new PostfixExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, MiniCppParser.RULE_postfixExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.primaryExpression();
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 25)) & ~0x1f) === 0 && ((1 << (_la - 25)) & 286727) !== 0)) {
	            this.state = 340;
	            this.postfixOp();
	            this.state = 345;
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



	postfixOp() {
	    let localctx = new PostfixOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, MiniCppParser.RULE_postfixOp);
	    var _la = 0;
	    try {
	        this.state = 361;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 346;
	            this.match(MiniCppParser.DOT);
	            this.state = 347;
	            this.match(MiniCppParser.Identifier);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 348;
	            this.match(MiniCppParser.ARROW);
	            this.state = 349;
	            this.match(MiniCppParser.Identifier);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 350;
	            this.match(MiniCppParser.LBRACKET);
	            this.state = 351;
	            this.expression();
	            this.state = 352;
	            this.match(MiniCppParser.RBRACKET);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 354;
	            this.match(MiniCppParser.LPAREN);
	            this.state = 356;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758229248) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 14347) !== 0)) {
	                this.state = 355;
	                this.argumentList();
	            }

	            this.state = 358;
	            this.match(MiniCppParser.RPAREN);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 359;
	            this.match(MiniCppParser.INCREMENT);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 360;
	            this.match(MiniCppParser.DECREMENT);
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
	    this.enterRule(localctx, 66, MiniCppParser.RULE_primaryExpression);
	    try {
	        this.state = 373;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 363;
	            this.match(MiniCppParser.Number);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 364;
	            this.match(MiniCppParser.StringLiteral);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 365;
	            this.match(MiniCppParser.TRUE);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 366;
	            this.match(MiniCppParser.FALSE);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 367;
	            this.match(MiniCppParser.NULLPTR);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 368;
	            this.match(MiniCppParser.Identifier);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 369;
	            this.match(MiniCppParser.LPAREN);
	            this.state = 370;
	            this.expression();
	            this.state = 371;
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
MiniCppParser.VOID = 7;
MiniCppParser.TRUE = 8;
MiniCppParser.FALSE = 9;
MiniCppParser.NULLPTR = 10;
MiniCppParser.STRUCT = 11;
MiniCppParser.IF = 12;
MiniCppParser.ELSE = 13;
MiniCppParser.WHILE = 14;
MiniCppParser.FOR = 15;
MiniCppParser.RETURN = 16;
MiniCppParser.NEW = 17;
MiniCppParser.DELETE = 18;
MiniCppParser.EQ = 19;
MiniCppParser.NEQ = 20;
MiniCppParser.LE = 21;
MiniCppParser.GE = 22;
MiniCppParser.AND = 23;
MiniCppParser.OR = 24;
MiniCppParser.ARROW = 25;
MiniCppParser.INCREMENT = 26;
MiniCppParser.DECREMENT = 27;
MiniCppParser.ASSIGN = 28;
MiniCppParser.PLUS = 29;
MiniCppParser.MINUS = 30;
MiniCppParser.MULTIPLY = 31;
MiniCppParser.DIVIDE = 32;
MiniCppParser.MOD = 33;
MiniCppParser.LT = 34;
MiniCppParser.GT = 35;
MiniCppParser.NOT = 36;
MiniCppParser.AMPERSAND = 37;
MiniCppParser.DOT = 38;
MiniCppParser.LPAREN = 39;
MiniCppParser.RPAREN = 40;
MiniCppParser.LBRACE = 41;
MiniCppParser.RBRACE = 42;
MiniCppParser.LBRACKET = 43;
MiniCppParser.RBRACKET = 44;
MiniCppParser.SEMI = 45;
MiniCppParser.COMMA = 46;
MiniCppParser.Identifier = 47;
MiniCppParser.Number = 48;
MiniCppParser.StringLiteral = 49;
MiniCppParser.LINE_COMMENT = 50;
MiniCppParser.BLOCK_COMMENT = 51;
MiniCppParser.WS = 52;

MiniCppParser.RULE_program = 0;
MiniCppParser.RULE_topLevelDeclaration = 1;
MiniCppParser.RULE_structDeclaration = 2;
MiniCppParser.RULE_structMember = 3;
MiniCppParser.RULE_functionDeclaration = 4;
MiniCppParser.RULE_returnType = 5;
MiniCppParser.RULE_parameterList = 6;
MiniCppParser.RULE_parameter = 7;
MiniCppParser.RULE_argumentList = 8;
MiniCppParser.RULE_block = 9;
MiniCppParser.RULE_statement = 10;
MiniCppParser.RULE_declaration = 11;
MiniCppParser.RULE_declarator = 12;
MiniCppParser.RULE_assignment = 13;
MiniCppParser.RULE_ifStatement = 14;
MiniCppParser.RULE_whileStatement = 15;
MiniCppParser.RULE_forStatement = 16;
MiniCppParser.RULE_forInit = 17;
MiniCppParser.RULE_returnStatement = 18;
MiniCppParser.RULE_deleteStatement = 19;
MiniCppParser.RULE_expressionStatement = 20;
MiniCppParser.RULE_type = 21;
MiniCppParser.RULE_expression = 22;
MiniCppParser.RULE_logicalOrExpression = 23;
MiniCppParser.RULE_logicalAndExpression = 24;
MiniCppParser.RULE_equalityExpression = 25;
MiniCppParser.RULE_relationalExpression = 26;
MiniCppParser.RULE_additiveExpression = 27;
MiniCppParser.RULE_multiplicativeExpression = 28;
MiniCppParser.RULE_unaryExpression = 29;
MiniCppParser.RULE_newExpression = 30;
MiniCppParser.RULE_postfixExpression = 31;
MiniCppParser.RULE_postfixOp = 32;
MiniCppParser.RULE_primaryExpression = 33;

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

	topLevelDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TopLevelDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(TopLevelDeclarationContext,i);
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



class TopLevelDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_topLevelDeclaration;
    }

	structDeclaration() {
	    return this.getTypedRuleContext(StructDeclarationContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterTopLevelDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitTopLevelDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitTopLevelDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_structDeclaration;
    }

	STRUCT() {
	    return this.getToken(MiniCppParser.STRUCT, 0);
	};

	Identifier() {
	    return this.getToken(MiniCppParser.Identifier, 0);
	};

	LBRACE() {
	    return this.getToken(MiniCppParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MiniCppParser.RBRACE, 0);
	};

	SEMI() {
	    return this.getToken(MiniCppParser.SEMI, 0);
	};

	structMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StructMemberContext);
	    } else {
	        return this.getTypedRuleContext(StructMemberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterStructDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitStructDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitStructDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_structMember;
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


	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterStructMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitStructMember(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitStructMember(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_functionDeclaration;
    }

	returnType() {
	    return this.getTypedRuleContext(ReturnTypeContext,0);
	};

	Identifier() {
	    return this.getToken(MiniCppParser.Identifier, 0);
	};

	LPAREN() {
	    return this.getToken(MiniCppParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MiniCppParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_returnType;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
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


	VOID() {
	    return this.getToken(MiniCppParser.VOID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterReturnType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitReturnType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitReturnType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_parameterList;
    }

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.COMMA);
	    } else {
	        return this.getToken(MiniCppParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitParameterList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_parameter;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Identifier() {
	    return this.getToken(MiniCppParser.Identifier, 0);
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


	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitParameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitParameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_argumentList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.COMMA);
	    } else {
	        return this.getToken(MiniCppParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterArgumentList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitArgumentList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitArgumentList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(MiniCppParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MiniCppParser.RBRACE, 0);
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
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitBlock(this);
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

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	deleteStatement() {
	    return this.getTypedRuleContext(DeleteStatementContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
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

	LBRACKET() {
	    return this.getToken(MiniCppParser.LBRACKET, 0);
	};

	RBRACKET() {
	    return this.getToken(MiniCppParser.RBRACKET, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
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



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(MiniCppParser.IF, 0);
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

	ELSE() {
	    return this.getToken(MiniCppParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_whileStatement;
    }

	WHILE() {
	    return this.getToken(MiniCppParser.WHILE, 0);
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

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitWhileStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(MiniCppParser.FOR, 0);
	};

	LPAREN() {
	    return this.getToken(MiniCppParser.LPAREN, 0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.SEMI);
	    } else {
	        return this.getToken(MiniCppParser.SEMI, i);
	    }
	};


	RPAREN() {
	    return this.getToken(MiniCppParser.RPAREN, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	forInit() {
	    return this.getTypedRuleContext(ForInitContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForInitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_forInit;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	declarator() {
	    return this.getTypedRuleContext(DeclaratorContext,0);
	};

	ASSIGN() {
	    return this.getToken(MiniCppParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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


	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterForInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitForInit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitForInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_returnStatement;
    }

	RETURN() {
	    return this.getToken(MiniCppParser.RETURN, 0);
	};

	SEMI() {
	    return this.getToken(MiniCppParser.SEMI, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitReturnStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeleteStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_deleteStatement;
    }

	DELETE() {
	    return this.getToken(MiniCppParser.DELETE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(MiniCppParser.SEMI, 0);
	};

	LBRACKET() {
	    return this.getToken(MiniCppParser.LBRACKET, 0);
	};

	RBRACKET() {
	    return this.getToken(MiniCppParser.RBRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterDeleteStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitDeleteStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitDeleteStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(MiniCppParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitExpressionStatement(this);
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

	Identifier() {
	    return this.getToken(MiniCppParser.Identifier, 0);
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

	logicalOrExpression() {
	    return this.getTypedRuleContext(LogicalOrExpressionContext,0);
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



class LogicalOrExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_logicalOrExpression;
    }

	logicalAndExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalAndExpressionContext);
	    } else {
	        return this.getTypedRuleContext(LogicalAndExpressionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.OR);
	    } else {
	        return this.getToken(MiniCppParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterLogicalOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitLogicalOrExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitLogicalOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LogicalAndExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_logicalAndExpression;
    }

	equalityExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EqualityExpressionContext);
	    } else {
	        return this.getTypedRuleContext(EqualityExpressionContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.AND);
	    } else {
	        return this.getToken(MiniCppParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterLogicalAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitLogicalAndExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitLogicalAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EqualityExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_equalityExpression;
    }

	relationalExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationalExpressionContext);
	    } else {
	        return this.getTypedRuleContext(RelationalExpressionContext,i);
	    }
	};

	EQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.EQ);
	    } else {
	        return this.getToken(MiniCppParser.EQ, i);
	    }
	};


	NEQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.NEQ);
	    } else {
	        return this.getToken(MiniCppParser.NEQ, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterEqualityExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitEqualityExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitEqualityExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RelationalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_relationalExpression;
    }

	additiveExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExpressionContext,i);
	    }
	};

	LT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.LT);
	    } else {
	        return this.getToken(MiniCppParser.LT, i);
	    }
	};


	GT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.GT);
	    } else {
	        return this.getToken(MiniCppParser.GT, i);
	    }
	};


	LE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.LE);
	    } else {
	        return this.getToken(MiniCppParser.LE, i);
	    }
	};


	GE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniCppParser.GE);
	    } else {
	        return this.getToken(MiniCppParser.GE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterRelationalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitRelationalExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitRelationalExpression(this);
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

	postfixExpression() {
	    return this.getTypedRuleContext(PostfixExpressionContext,0);
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

	NOT() {
	    return this.getToken(MiniCppParser.NOT, 0);
	};

	AMPERSAND() {
	    return this.getToken(MiniCppParser.AMPERSAND, 0);
	};

	MULTIPLY() {
	    return this.getToken(MiniCppParser.MULTIPLY, 0);
	};

	newExpression() {
	    return this.getTypedRuleContext(NewExpressionContext,0);
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



class NewExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_newExpression;
    }

	NEW() {
	    return this.getToken(MiniCppParser.NEW, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	LBRACKET() {
	    return this.getToken(MiniCppParser.LBRACKET, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RBRACKET() {
	    return this.getToken(MiniCppParser.RBRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterNewExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitNewExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitNewExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PostfixExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_postfixExpression;
    }

	primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
	};

	postfixOp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PostfixOpContext);
	    } else {
	        return this.getTypedRuleContext(PostfixOpContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterPostfixExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitPostfixExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitPostfixExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PostfixOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniCppParser.RULE_postfixOp;
    }

	DOT() {
	    return this.getToken(MiniCppParser.DOT, 0);
	};

	Identifier() {
	    return this.getToken(MiniCppParser.Identifier, 0);
	};

	ARROW() {
	    return this.getToken(MiniCppParser.ARROW, 0);
	};

	LBRACKET() {
	    return this.getToken(MiniCppParser.LBRACKET, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RBRACKET() {
	    return this.getToken(MiniCppParser.RBRACKET, 0);
	};

	LPAREN() {
	    return this.getToken(MiniCppParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MiniCppParser.RPAREN, 0);
	};

	argumentList() {
	    return this.getTypedRuleContext(ArgumentListContext,0);
	};

	INCREMENT() {
	    return this.getToken(MiniCppParser.INCREMENT, 0);
	};

	DECREMENT() {
	    return this.getToken(MiniCppParser.DECREMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.enterPostfixOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniCppListener ) {
	        listener.exitPostfixOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniCppVisitor ) {
	        return visitor.visitPostfixOp(this);
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

	StringLiteral() {
	    return this.getToken(MiniCppParser.StringLiteral, 0);
	};

	TRUE() {
	    return this.getToken(MiniCppParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(MiniCppParser.FALSE, 0);
	};

	NULLPTR() {
	    return this.getToken(MiniCppParser.NULLPTR, 0);
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
MiniCppParser.TopLevelDeclarationContext = TopLevelDeclarationContext; 
MiniCppParser.StructDeclarationContext = StructDeclarationContext; 
MiniCppParser.StructMemberContext = StructMemberContext; 
MiniCppParser.FunctionDeclarationContext = FunctionDeclarationContext; 
MiniCppParser.ReturnTypeContext = ReturnTypeContext; 
MiniCppParser.ParameterListContext = ParameterListContext; 
MiniCppParser.ParameterContext = ParameterContext; 
MiniCppParser.ArgumentListContext = ArgumentListContext; 
MiniCppParser.BlockContext = BlockContext; 
MiniCppParser.StatementContext = StatementContext; 
MiniCppParser.DeclarationContext = DeclarationContext; 
MiniCppParser.DeclaratorContext = DeclaratorContext; 
MiniCppParser.AssignmentContext = AssignmentContext; 
MiniCppParser.IfStatementContext = IfStatementContext; 
MiniCppParser.WhileStatementContext = WhileStatementContext; 
MiniCppParser.ForStatementContext = ForStatementContext; 
MiniCppParser.ForInitContext = ForInitContext; 
MiniCppParser.ReturnStatementContext = ReturnStatementContext; 
MiniCppParser.DeleteStatementContext = DeleteStatementContext; 
MiniCppParser.ExpressionStatementContext = ExpressionStatementContext; 
MiniCppParser.TypeContext = TypeContext; 
MiniCppParser.ExpressionContext = ExpressionContext; 
MiniCppParser.LogicalOrExpressionContext = LogicalOrExpressionContext; 
MiniCppParser.LogicalAndExpressionContext = LogicalAndExpressionContext; 
MiniCppParser.EqualityExpressionContext = EqualityExpressionContext; 
MiniCppParser.RelationalExpressionContext = RelationalExpressionContext; 
MiniCppParser.AdditiveExpressionContext = AdditiveExpressionContext; 
MiniCppParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
MiniCppParser.UnaryExpressionContext = UnaryExpressionContext; 
MiniCppParser.NewExpressionContext = NewExpressionContext; 
MiniCppParser.PostfixExpressionContext = PostfixExpressionContext; 
MiniCppParser.PostfixOpContext = PostfixOpContext; 
MiniCppParser.PrimaryExpressionContext = PrimaryExpressionContext; 
