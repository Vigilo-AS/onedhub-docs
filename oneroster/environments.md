# Environments

We're offering several environments for different purposes. Each environment has its own set of credentials
and endpoints.

> **Note:** What environments your organization has access to depends on your agreement with Vigilo AS.

The environments are as follows:

| Environment name | Description             |
|------------------|-------------------------|
| dev              | Development environment |
| staging          | Staging environment     |
| `none`           | Production environment  |

`orgId` is a port of the OneRoster service url. It is a unique identifier for your organization and is typically a your
organization's domain name. For example, if your organization's domain name is `vigilo.no`, your `orgId` would be
`vigilo.no`.

## Open API Specifications

You can find the Open API specifications for the different environments at the following URLs:
`https://api.<environment>.onedhub.io/<orgId>/ims/oneroster/rostering/v1p2/swagger-ui/index.html`

Examples:

* `https://api.staging.onedhub.io/vigilo.no/ims/oneroster/rostering/v1p2/swagger-ui/index.html`
* `https://api.onedhub.io/vigilo.no/ims/oneroster/rostering/v1p2/swagger-ui/index.html`

## OneRoster service URL

You can find the OneRoster service URL at the following URL:
`https://api.<environment>.onedhub.io/<orgId>/ims/oneroster/rostering/v1p2`

Examples:

* `https://api.staging.onedhub.io/vigilo.no/ims/oneroster/rostering/v1p2`
* `https://api.onedhub.io/vigilo.no/ims/oneroster/rostering/v1p2`

## Identity provider

### Token url

You can find the token URL at the following URL:

`https://id.<environment>.onedhub.io/realms/onedhub/protocol/openid-connect/token`

Examples:

* `https://id.onedhub.io/realms/onedhub/protocol/openid-connect/token`
* `https://id.staging.onedhub.io/realms/onedhub/protocol/openid-connect/token`

### OpenID Connect configuration

You can find the OpenID Connect configuration at the following URL:
`https://id.<environment>.onedhub.io/realms/onedhub/.well-known/openid-configuration`

Examples:

* `https://id.onedhub.io/realms/onedhub/.well-known/openid-configuration`
* `https://id.staging.onedhub.io/realms/onedhub/.well-known/openid-configuration`

