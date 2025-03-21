# Updating data

Some resources have properties that can be updated. The properties that can be updated are marked in the resource
documentation as `writable`.

To update a resource, you need to send a `PATCH` request to the resource's endpoint. The request body should contain
only the properties that you want to update.

Updates is asynchronous. The update process is as follows:

1. You send a `PATCH` request to the resource's endpoint.
2. The API responds with a `202 Accepted` status code and a `Location` header with a reference to a `/status/<uuid>`
   resource.
3. The `/status/<uuid>` resource will continue to respond with `202 Accepted` until it's finished.
    * If the update is successful, the `/status/<uuid>` resource will respond with a `303 See Other` status code and a
      `Location` header referring to the updated resource.
    * If the update fails, the `/status/<uuid>` resource will respond with a `4xx`-series status code and an error
      message.