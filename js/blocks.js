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
    "tooltip": "searches twitter for specified text.",
    "nextStatement": null,
    "colour": 300,
  },
  {
    "type": "file2json",
    "message0": "Process txt files from data/%1, group %2 sents",
    "args0": [
      {
        "type": "field_input",
        "name": "VALUE",
      },
      {
        "type": "field_input",
        "name": "NSENTS",
      }
    ],
    "tooltip": "Converts single or multipe files to JSON. The first parameter can be name of file/s , like data/abc.txt or data/*.txt. The second parameter is number of sentences to group into a single JSON record.",
    "nextStatement": null,
    "colour": 350,
  },
  {
    "type": "senti",
    "message0": "Sentiment Analysis (AFINN)",
    "tooltip": "Performs sentiment analysis using AFINN technique.",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 180,
  },
  {
    "type": "entity",
    "message0": "NER (Spacy)",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Performs Named Entity Recognition (NER) using Spacy.",
    "colour": 200,
  },
  {
      "type": "lang",
      "message0": "Language Identification (FastText)",
      "previousStatement": null,
      "nextStatement": null,
      "tooltip": "Performs language identification using FastText.",
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
    "tooltip": "Performs chuncking using NLTK.",
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
    "tooltip": "Performs Q&A or classification tasks using Transformers",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 100,
  },
  {
      "type": "sentixfrm",
      "tooltip": "Performs sentiment analysis using Transformers",
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
    "tooltip": "Modifies JSON using a template.",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 240,
  },
  {
    "type": "savetofile",
    "message0": "Save pipeline output to file %1",
    "args0": [
      {
        "type": "field_input",
        "name": "VALUE",
      }
    ],
    "tooltip": "Saves pipeline output to file",
    "previousStatement": null,
    "colour": 390,
  },
  {
    "type": "setreamtows",
    "message0": "Stream to browser on port %1",
    "args0": [
      {
        "type": "field_input",
        "name": "VALUE",
      }
    ],
    "tooltip": "Stream output to browser using Socket.IO",
    "previousStatement": null,
    "colour": 400,
  },
  {
    "type": "kafka2json",
    "message0": "Listen to Kafka topic: %1, uri: %2 , groupId: %3",
    "args0": [
      {
        "type": "field_input",
        "name": "topic",
        "text":"nlphose"
      },
      {
        "type": "field_input",
        "name": "uri",
        "text":"localhost:9092"
      },
      {
        "type": "field_input",
        "name": "grpId",
        "text": "grp1"
      }
    ],
    "tooltip": "Subscribe to a kafka stream.",
    
    "nextStatement": null,
    "colour": 125,
  },
  {
    "type": "sinktokafka",
    "message0": "Write to Kafka topic: %1, uri: %2",
    "args0": [
      {
        "type": "field_input",
        "name": "topic",
        "text":"nlpoutput"
      },
      {
        "type": "field_input",
        "name": "uri",
        "text":"localhost:9092"
      }
    ],
    "tooltip": "Subscribe to a kafka stream.",
    "previousStatement": null,
    "colour": 330,
  }

]);


