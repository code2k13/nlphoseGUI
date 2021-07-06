
(function () {



    Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        scrollbars: false,
    });
    let workspace = Blockly.getMainWorkspace();
    workspace.clear();


    workspace.addChangeListener((a) => {
        w = a.getEventWorkspace_()
        var argList = []

        var blks = w.getAllBlocks()
        blks.map(b => {
            var params = []

            if (['senti', 'entity', 'lang', 'twint2json'].indexOf(b.type) > -1) {

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
                params.push("twint -s " + value)
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

            argList.push(params)
        })

        document.getElementById("cmd").innerText = argList.join(" |\\ \r\n")
        console.log(argList)
    })



})();
