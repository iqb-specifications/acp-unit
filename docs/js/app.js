
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "acp-unit",
    "description": "Specification for assessment content package unit.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "assessment-content-package": {
        "$id": "acp-unit@0.5",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Assessment Content Package Unit",
        "description": "Specification for assessment content package unit.",
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "name": {
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "description": {
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-3>"
          },
          "lang": {
            "description": "ISO-language code",
            "type": "string",
            "minLength": 1,
            "pattern": "^[a-z]{2}$",
            "default": "de",
            "x-parser-schema-id": "<anonymous-schema-4>"
          },
          "items": {
            "description": "Default sorting is alpha-numeric.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "useUnitAliasAsPrefix": {
                  "description": "If true, the unique item identifier will be composed of the unit alias and the item id. If false, the item id has no prefix.",
                  "type": "boolean",
                  "default": true,
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "name": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-9>"
                },
                "sourceVariable": {
                  "description": "Refers to the variable providing its score as item value",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-10>"
                }
              },
              "required": [
                "id",
                "sourceVariable"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-6>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-5>"
          },
          "dependencies": {
            "description": "All digital objects being part of the unit",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "description": "Id/path to find the digital object",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-13>"
                },
                "type": {
                  "description": "Describes the function of the dependency.",
                  "type": "string",
                  "enum": [
                    "UNIT_INDEX",
                    "UNIT_CODING_SCHEME",
                    "UNIT_METADATA",
                    "UNIT_UI_DEFINITION",
                    "PLAYER",
                    "PLAYER_DEPENDENCY",
                    "WIDGET"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-14>"
                }
              },
              "required": [
                "id",
                "type"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-12>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-11>"
          }
        },
        "required": [
          "id",
          "dependencies"
        ],
        "additionalProperties": false,
        "$defs": {
          "unitDependency": "$ref:$.components.schemas.assessment-content-package.properties.dependencies.items"
        },
        "x-parser-schema-id": "acp-unit@0.5"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  