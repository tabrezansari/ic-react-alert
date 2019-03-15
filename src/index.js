import React from "react";
import ReactDom from "react-dom";

import Alert from "./Alert";

ReactDom.render(
	<Alert
		show={true}
		type="confirm"
		content="Are you realy going to delte it!." 
		onConfirm={() => console.log("working")}
	/>,
document.getElementById('root')
	)