<script setup>
import PostBadge from '../components/PostBadge.vue';
import ScopeBadge from '../components/ScopeBadge.vue';
</script>
# Variable pay receipt module

The variable pay receipt module is used to retrieve the status of variable pay transactions. This module is used to
check the status of variable pay transactions that have been initiated.

The base url for the variable pay receipt module is
`https://api.<environment>.onedhub.io/shared/core/api/variable-pay/<resource>`

## Resources

### Receipt
<hr/>
<p>
Endpoints 
<PostBadge path="/receipt"/>
</p>
<p>
Scope
<ScopeBadge scopeShortName="variable-pay.receipt"/>
</p>
<hr/>



| Property       |                                                                                                                                                                     |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`           | `UUID` of variable pay transaction                                                                                                                                  |
| `status`       | Status of the variable pay transaction. Transaction is considered positive/successful if status is null, "" or 0. If an error occurred it should be any other value |
| `errorMessage` | A human readable message explaining how it went. Will not be handled if status is 0 (success). The message will propagate to the UI when there's an error.          |

#### Example payload

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



