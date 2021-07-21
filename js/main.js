
(function () {



    Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        scrollbars: false,
    });
    let workspace = Blockly.getMainWorkspace();
    workspace.clear();


    workspace.addChangeListener((a) => {

        var warningDiv = document.getElementById("warning")
        warningDiv.style.visibility = 'hidden';
        w = a.getEventWorkspace_()
        var params = []

        var blks = w.getAllBlocks()
        blks.forEach(b => {

            if (['senti', 'entity', 'lang'].indexOf(b.type) > -1) {

                params.push("./" + b.type + " ")
            }

            if (b.type == "xfrmr") {
                var task = b.getFieldValue('task');
                var value = b.getFieldValue('VALUE');
                params.push("./xformer.py --pipeline " + task + " --param '" + value + "'")
            }

            if (b.type == "sentixfrm") {
                params.push("./xformer.py --pipeline sentiment-analysis ")
            }

            if (b.type == "twint") {
                var value = b.getFieldValue('VALUE');
                params.push("twint -s " + '"' + value  + '"')
                params.push("./twint2json.py")
            }

            if (b.type == "jq") {
                var value = b.getFieldValue('VALUE');
                params.push("jq '" + value + "'")
            }

            if (b.type == "chunk") {
                var value = b.getFieldValue('VALUE');
                var observation = b.getFieldValue('OBSERVATION');
                params.push("./chunk.py " + observation + " '" + value + "'")
            }

            if (b.type == "file2json") {
                warningDiv.style.visibility = 'visible';
                var value = b.getFieldValue('VALUE');
                var nsents = b.getFieldValue('NSENTS');
                params.push("./files2json.py -n " + nsents + "  " + value)
            }

            //argList.push(params)
        })

        document.getElementById("cmd").innerText = params.join(" |\\\r\n")
        //console.log(argList)
    })



})();

function saveDiagram() {
    var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var blob = new Blob([xml.outerHTML], { type: "application/xml,;charset=utf-8" });
    saveAs(blob, 'nlphose.dat');
}

function loadDiagram() {
    Blockly.getMainWorkspace().clear()
    if (document.getElementById("files").files.length < 1) {
        return;
    }
    const reader = new FileReader()
    reader.onload = event => {
        var xml = Blockly.Xml.textToDom(event.target.result);
        Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
    }
    reader.readAsText(document.getElementById("files").files[0]);
}


