
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

        document.getElementById("port").style.visibility = 'hidden';
        var params = []

        var blks = w.getAllBlocks()
        blks.forEach(b => {

            if (['senti', 'entity', 'lang'].indexOf(b.type) > -1) {

                params.push("./" + b.type + ".py ")
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
                params.push("twint -s " + '"' + value + '"')
                params.push("./twint2json.py")
            }

            if (b.type == "jq") {
                var value = b.getFieldValue('VALUE');
                params.push("jq -c '" + value + "'")
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
                params.push("./file2json.py -n " + nsents + "  " + "data/" + value);

            }

            if (b.type == "savetofile") {
                warningDiv.style.visibility = 'visible';
                var value = b.getFieldValue('VALUE');
                params.push("> data/" + value);

            }


            if (b.type == "setreamtows") {
                document.getElementById("port").style.visibility = 'visible';
                var value = b.getFieldValue('VALUE');
                document.getElementById("portval").innerText = value
                params.push("./ws.js");

            }

            if (b.type == "kafka2json") {
                //./kafka2json.py -topic mytopic -endpoint 10.232.3.2.3:1234 -groupId mygroup
                var topic = b.getFieldValue('topic');
                var uri = b.getFieldValue('uri');
                var grp = b.getFieldValue('grpId');
                params.push("./kafka2json.py -topic " + topic + "  " + " -endpoint " + uri + " -groupId " + grp);
            }


            if (b.type == "sinktokafka") {
                //./kafka2json.py -topic mytopic -endpoint 10.232.3.2.3:1234 -groupId mygroup
                var topic = b.getFieldValue('topic');
                var uri = b.getFieldValue('uri');
               
                params.push("./kafkasink.py -topic " + topic + "  " + " -endpoint " + uri);
            }

            var dockercmd = "docker run --rm -it "
            if (warningDiv.style.visibility == 'visible') {
                dockercmd = dockercmd + "-v ${PWD}:/usr/src/app/nlphose/scripts/data"
            }

            if (document.getElementById("port").style.visibility == 'visible') {
                dockercmd = dockercmd + " -p " + document.getElementById("portval").innerText + ":3000"
            }
            dockercmd = dockercmd + " code2k13/nlphose:latest"
            document.getElementById("dockercmd").innerText = dockercmd;
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


