var bp = require("../core/tag");

///////////////////////////////////////////////////////////////////////////////
// Public

module.exports = events;

///////////////////////////////////////////////////////////////////////////////
function events(tag){

///////////////////////////////////////////////////////////////////////////////
// Public

  tag.bonaparte.triggerEvent = triggerEvent;

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

  function triggerEvent(event, data, bubbles, cancelable){
    bp.tag.triggerEvent(tag, event, data, bubbles, cancelable);
  }

///////////////////////////////////////////////////////////////////////////////


}



