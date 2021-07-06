Blockly.defineBlocksWithJsonArray([
    {
      "type": "twint",
      "message0": "Search Twitter For %1",
      "args0": [
        {
          "type": "field_input",
          "name": "VALUE",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 300,
    },
    {
      "type": "twint2json",
      "message0": "Convert twint output to JSON",
      "previousStatement": 'twint',
      "nextStatement": null,
      "colour": 350,
    },
    {
      "type": "senti",
      "message0": "Sentiment Analysis (AFINN)",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
    },
    {
      "type": "entity",
      "message0": "NER (Spacy)",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 200,
    },
    {
        "type": "lang",
        "message0": "Language Identification (FastText)",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 225,
      },
    {
      "type": "chunk",
      "message0": "Chunk(NLTK) lbl  %1 expression  %2",
      "args0": [
        {
          "type": "field_input",
          "name": "OBSERVATION",
        },
        {
          "type": "field_input",
          "name": "VALUE",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 150,
    },
    {
      "type": "xfrmr",
      "message0": "Xformer %1 for %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "task",
          "options": [         
            ["Q&A", "question-answering"],
            ["Classification", "zero-shot-classification"],
  
          ]
        },
        {
          "type": "field_multilinetext",
          "name": "VALUE",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 100,
    },
    {
        "type": "sentixfrm",
        "message0": "Sentiment Analysis (Xformer)",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 100,
      },
    {
      "type": "jq",
      "message0": "Transform JSON using template %1",
      "args0": [
        {
          "type": "field_input",
          "name": "VALUE",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 240,
    }
  
  ]);
  
  
  