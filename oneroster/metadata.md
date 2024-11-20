# OnEdHub specific metadata

## User

| Key                              | Format                                                                   | Type         | Description                                                             |
|----------------------------------|--------------------------------------------------------------------------|--------------|-------------------------------------------------------------------------|
| `onedhub.clientIds`              |                                                                          | `List<UUID>` | *Internal use only* (internal id of student)                            |
| `onedhub.birthDate`              | `YYYY-MM-DD` ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601))        | `Date`       | Date of birth                                                           |
| `onedhub.gender`                 |                                                                          | `String`     | `male` or `female`                                                      | 
| `onedhub.formOfWrittenNorwegian` |                                                                          | `String`     | `nn` or `nb`                                                            | 
| `onedhub.firstLanguage`          | [ISO 639 alpha 3](https://en.wikipedia.org/wiki/List_of_ISO_639-3_codes) | `String`     | A first language (L1), native language, native tongue, or mother tongue |
| `onedhub.employeeId`             |                                                                          | `UUID`       | *Internal use only* (internal id of employee)                           |
| `onedhub.employeeNumber`         |                                                                          | `String`     | Employee number                                                         |
| `onedhub.employeeFromDate`       | `YYYY-MM-DD` ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601))        | `Date`       | Start-date for the employee                                             |
| `onedhub.employeeToDate`         | `YYYY-MM-DD` ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601))        | `Date`       | End-data (until, not included) for the employee                         |

## Org

| Key                        | Format | Type                        | Description                                                                                      |
|----------------------------|--------|-----------------------------|--------------------------------------------------------------------------------------------------|
| `onedhub.city`             |        | `String`                    | City of organization                                                                             |
| `onedhub.classes`          |        | `Uri`                       | Link to Classes for this org                                                                     |
| `onedhub.postalCode`       |        | `String`                    | Postal code of organization                                                                      |
| `onedhub.students`         |        | `Uri`                       | Link to Students (user-objects) for this org                                                     |
| `onedhub.homePageUrl`      |        | `String`                    | Home page url of organization                                                                    |
| `onedhub.teachers`         |        | `Uri`                       | Link to Teachers (user-objects) for this org                                                     |
| `onedhub.managerFirstName` |        | `String`                    | First name of the manager of the organization                                                    |
| `onedhub.hrUnitIds`        |        | `List<String>`              | From user interface «Enhetsinformasjon/ Tilleggsinformasjon», e.g."hrUnitIds": ["35211","35240"] |
| `onedhub.email`            |        | `String`                    | Email of the organization                                                                        |
| `onedhub.coordinates`      |        | [Coordinates](#coordinates) | Coordinates of the organization                                                                  |
| `onedhub.courses`          |        | `Uri`                       | Link to Courses for this org                                                                     |
| `onedhub.managerLastName`  |        | `String`                    | Last name of the manager of the organization                                                     |
| `onedhub.enrollments`      |        | `Uri`                       | Link to Enrollments for this org                                                                 |
| `onedhub.phoneNumber`      |        | `String`                    | Phone number of the organization                                                                 |
| `onedhub.ownership`        |        | `String`                    | Schools: `Privat` or `Offentlig`.  ChildCare: `Privat` or `Kommunal`                             |            |
| `onedhub.academicSessions` |        | `Uri`                       | Link to AcademicSessions for this org                                                            |
| `onedhub.addressline2`     |        | `String`                    | Addressline 2 of the organization                                                                |
| `onedhub.addressline1`     |        | `String`                    | Addressline 1 of the organization                                                                |
| `onedhub.shortName`        |        | `String`                    | Short name of the organization                                                                   |
| `onedhub.key`              |        | `String`                    | Only for tenants: Tenant `key`                                                                   |

## Course

| Key                   | Format | Type | Description                                                                                                                                           |
|-----------------------|--------|------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onedhub.initialYear` |        | Int  | Initial year of course. To get the course for a student you need to find the year the student started in 1. grade and get the `course` for that year. |

## Class

| Key                 | Format | Type     | Description                                         |
|---------------------|--------|----------|-----------------------------------------------------|
| `onedhub.groupType` |        | `String` | See [Group types](#group-types) for possible values |

### Group types

| Type              | Description         |
|-------------------|---------------------|
| `Class`           | Klasse              |  
| `LearningSupport` | Spesialundervisning |
| `SnoGroup`        |                     |
| `SubjectGroup`    | Faggruppe           |
| `GnoGroup`        |                     |
| `SfaGroup`        |                     |
| `SfoGroup`        |                     |
| `PasTestGroup`    |                     |
| `OtherUsers`      |                     |
| `TpoGroup`        |                     |
| `NativeLanguage`  |                     |
| `TofGroup`        |                     |

## AcademicSession

| Key              | Format | Type     | Description                |
|------------------|--------|----------|----------------------------|
| `onedhub.org`    |        | `Uri`    | Link to organization       |
| `onedhub.status` |        | `String` | Status of academic session |

## Metadata models

### Coordinates

| Property    | Type     | Description |
|-------------|----------|-------------|
| `latitude`  | `Double` |             |
| `longitude` | `Double` |             |
| `origin`    | `String` |             |

#### Example

```json
{
  "latitude": 60.36521,
  "longitude": 5.18717,
  "altitude": "GeoNorge"
}
```
