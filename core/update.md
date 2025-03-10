# Updating data

Some resources have properties that can be updated. The properties that can be updated are marked in the resource
documentation as `writable`.

To update a resource, you need to send a `PATCH` request to the resource's endpoint. The request body should contain
only the properties that you want to update.

Updates is synchronous and the response will contain the updated resource.