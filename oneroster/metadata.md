# OnEdHub specific metadata

## User

| Key                              | Description                                     | Type       |
|----------------------------------|-------------------------------------------------|------------|
| `onedhub.clientIds`              | *Internal use only* (internal id of student)    | List<UUID> |
| `onedhub.birthDate`              | Date of birth                                   | LocalDate  |
| `onedhub.gender`                 | `male` or `female`                              | String     | 
| `onedhub.formOfWrittenNorwegian` | `nn` or `nb`                                    | String     | 
| `onedhub.firstLanguage`          | Language codes according to ISO 639 alpha 3     | String     |
| `onedhub.employeeId`             | *Internal use only* (internal id of employee)   | UUID       |
| `onedhub.employeeNumber`         | Employee number from ??                         | String     |
| `onedhub.employeeFromDate`       | Start-date for the employee                     | LocalDate  |
| `onedhub.employeeToDate`         | End-data (until, not included) for the employee | LocalDate  |

## Org

| Key                                      | Description                                                                                      | Type                        |
|------------------------------------------|--------------------------------------------------------------------------------------------------|-----------------------------|
| `onedhub.city`                           | City of organization                                                                             | String                      |
| `onedhub.classes`                        | Link to Classes for this org                                                                     | Uri                         |
| `onedhub.postalCode`                     | Postal code of organization                                                                      | String                      |
| `onedhub.students`                       | Link to Students (user-objects) for this org                                                     | Uri                         |
| `onedhub.homePageUrl`                    | Home page url of organization                                                                    | String                      |
| `onedhub.teachers`                       | Link to Teachers (user-objects) for this org                                                     | Uri                         |
| `onedhub.managerFirstName`               | First name of the manager of the organization                                                    | String                      |
| ~~`onedhub.gsiId`~~                      | [**deprecated**] There is no replacement for this.                                               |                             |
| `onedhub.hrUnitIds`                      | From user interface «Enhetsinformasjon/ Tilleggsinformasjon», e.g."hrUnitIds": ["35211","35240"] | List<String>                |
| `onedhub.email`                          | Email of the organization                                                                        | String                      |
| `onedhub.coordinates`                    | Coordinates of the organization                                                                  | [Coordinates](#coordinates) |
| `onedhub.courses`                        | Link to Courses for this org                                                                     | Uri                         |
| ~~`onedhub.externalOrganizationNumber`~~ | [**deprecated**] There is no replacement for this.                                               |                             |
| `onedhub.managerLastName`                | Last name of the manager of the organization                                                     | String                      |
| `onedhub.enrollments`                    | Link to Enrollments for this org                                                                 | Uri                         |
| `onedhub.phoneNumber`                    | Phone number of the organization                                                                 | String                      |
| `onedhub.ownership`                      | Schools: `Privat` or `Offentlig´.  ChildCare: `Privat` or `Kommunal`                             | String                      |            |
| `onedhub.academicSessions`               | Link to AcademicSessions for this org                                                            | Uri                         |
| `onedhub.addressline2`                   | Addressline 2 of the organization                                                                | String                      |
| `onedhub.addressline1`                   | Addressline 1 of the organization                                                                | String                      |
| `onedhub.shortName`                      | Short name of the organization                                                                   | String                      |
| `onedhub.key`                            | Only for tenants: Tenant `key`                                                                   | String                      |

### Coordinates

```json
{
  "latitude": 60.36521,
  "longitude": 5.18717,
  "altitude": "GeoNorge"
}
```

### Course

| Key                   | Description                                                                                                                                           | Type |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| `onedhub.initialYear` | Initial year of course. To get the course for a student you need to find the year the student started in 1. grade and get the `course` for that year. | Int  |

### AcademicSession

| Key              | Description                | Type   |
|------------------|----------------------------|--------|
| `onedhub.org`    | Link to organization       | Uri    |
| `onedhub.status` | Status of academic session | String |
