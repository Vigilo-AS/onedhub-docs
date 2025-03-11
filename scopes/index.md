# Scopes

Scopes are a way to limit an application's access to resources. When an application requests access using the
client credentials flow, it specifies the scopes it needs. Each scope defines a specific level of access to the
resources. For example, a scope might allow an application to read employee data but not modify it.

Scopes are used to:

* **Specify Permissions**: Define what an application can and cannot do with the resources.
* **Enhance Security**: Limit the potential damage if an access token is compromised.
* **Improve Trust**: Clearly communicate what data an application will access.

When an application is authorized using client credentials, it is granted the scopes it requested. The application can
then access the resources based on these scopes.

## Example

If an application wants to read employee and client data, it might request the following scopes:

* `https://docs.onedhub.io/scopes/core-api.employees.read`
* `https://docs.onedhub.io/scopes/core-api.clients.read`

By granting these scopes, the application is allowed to read employee and client data, but not to modify them or access
other data.


<script setup>
import { data as scopes } from '../.vitepress/theme/scopes.data'
console.log(scopes.filter(scope => scope.frontmatter.title !== undefined))
</script>
## Available Scopes
<ul>
  <li v-for="scope in scopes.filter(scope => scope.frontmatter.title !== undefined)" :key="scope.url">
    <a :href="scope.url">{{ scope.frontmatter.title || 'Untitled' }}</a>
  </li>
</ul>