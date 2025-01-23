# Variable pay receipt

## Payload

### PayReceipt model

| Property  |                                                                                                                         |
|-----------|-------------------------------------------------------------------------------------------------------------------------|
| `id`      | `UUID` of variable pay transaction                                                                                      |
| `status`  | Status of the variable pay transaction. If it was successfully is should be `1`. If an error occurred it should be `-1` |
| `message` | A human readable message explaining how it went. This is excepted to propagate to the UI.                               |

### Example payload

```json
{
  "variablePayReceipts": [
    {
      "id": "eb85a341-06f0-4bb2-a21c-e95e572203be",
      "status": 1,
      "message": "Success"
    },
    {
      "id": "8d028ec4-c49c-4bae-927b-66cca194b49e",
      "status": -1,
      "message": "Error"
    }
  ]
}
```



