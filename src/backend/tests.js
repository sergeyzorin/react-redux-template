var chai = require( "chai" );
// var chaiAsPromised = require( "chai-as-promised" );
// chai.use( chaiAsPromised );
const assert = chai.assert;
let logic = require( "../backend/logic.js" );

describe( "backend tests", function() {
  beforeEach( function() {
    //before each test actoin
  } );
  describe( "Test block", function() {
    it( "should create message with given text and id 1", function() {
      let m = logic.createMessage( "from test" )
      assert.equal( "from test", m.message );
      assert.equal( 1, m.id );
    } );
  } );
} );
