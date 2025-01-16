# Legal guaridan

The legal guardian of a student is the person who has legal responsibility for the student. This is typically a parent
or guardian, but could be another person that has been granted legal responsibility for the student.

In the OnEdHub implementation of OneRoster, the relation between a student and their legal guardian is bidirectional.

## From the student to the legal guardian

You can find the legal guardian of a student by looking at the `users` endpoint. The `users` entities will contain a
list of `agents`.

### Example

```json
{
  "sourcedId": "56087508-35fe-4f21-a94f-b98b3991b729",
  ...
  "agents": [
    {
      "href": "https://api.staging.onedhub.io/example.com/ims/oneroster/rostering/v1p2/users/1799b7ac-0143-4725-9426-28da9b1b8976",
      "sourcedId": "1799b7ac-0143-4725-9426-28da9b1b8976",
      "type": "user"
    }
  ],
  ...
}
```

The `href` field contains the URL to the legal guardian. You can use this URL to get more information about the legal
guardian. The `sourcedId` field contains the unique identifier for the `user` object of the legal guardian.

## From the legal guardian to the student

You can find the students that a legal guardian is responsible for by looking at the `users` endpoint. The `users`
entities will contain three relevant fields:

### `agents`

A list of students that the user is responsible for.

#### Example

```json
{
  ...
  "agents": [
    {
      "href": "https://api.staging.onedhub.io/example.com/ims/oneroster/rostering/v1p2/users/56087508-35fe-4f21-a94f-b98b3991b729",
      "sourcedId": "56087508-35fe-4f21-a94f-b98b3991b729",
      "type": "user"
    }
  ],
  ...
}
```

The `href` field contains the URL to the student. You can use this URL to get more information about the student. The
`sourcedId` field contains the unique identifier for the `user` object of the student.

### `roles`

A list of roles that the user has. In this list each student this user is responsible for will have a role of
`ext:primaryGuardian`.

#### Example

```json
{
  ...
  "roles": [
    {
      "roleType": "primary",
      "role": "ext:primaryGuardian",
      "org": {
        "href": "https://api.staging.onedhub.io/ude.oslo.kommune.no/ims/oneroster/rostering/v1p2/orgs/321ea09b-e9da-40df-b8c8-7ca1393be494",
        "sourcedId": "321ea09b-e9da-40df-b8c8-7ca1393be494",
        "type": "org"
      },
      "userProfile": "userprofile://user/56087508-35fe-4f21-a94f-b98b3991b729"
    },
    ...
  ],
  ...
}
```

### `userProfiles`

A list of user profiles that the user has. In this list each student this user is responsible for will have a profile
where you can find the relation between the user and the student. You can find the relation in the
`1edtech.role.userRoleForAgent` field under `credentials`.

#### Example

```json

{
  "userProfiles": [
    {
      "profileId": "userprofile://user/56087508-35fe-4f21-a94f-b98b3991b729",
      "profileType": "RoleExtension",
      "vendorId": "Vigilo",
      "credentials": [
        {
          "type": "rolextension",
          "username": "56087508-35fe-4f21-a94f-b98b3991b729",
          "1edtech.role.agentId": "56087508-35fe-4f21-a94f-b98b3991b729",
          "1edtech.role.userRoleForAgent": "father"
        }
      ]
    },
    ...
  ],
  ...
}
```