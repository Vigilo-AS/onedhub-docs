# Variable pay receipt module

## Payload

### PayReceipt model

| Property  |                                                                                                                                                                     |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`      | `UUID` of the variable pay transaction                                                                                                                              |
| `status`  | Status of the variable pay transaction. Transaction is considered positive/successful if status is null, "" or 0. If an error occurred it should be any other value |
| `errorMessage` | A human readable message explaining how it went. Will not be handled if status is 0 (success). The message will propagate to the UI when there's an error.          |

### Example payload

```json
{
  "variablePayReceipts": [
    {
      "id": "eb85a341-06f0-4bb2-a21c-e95e572203be",
      "status": 0
    },
    {
      "id": "8d028ec4-c49c-4bae-927b-66cca194b49e",
      "status": -1,
      "errorMessage": "Error"
    }
  ]
}
```



