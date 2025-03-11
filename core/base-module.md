<script setup>
import ScopeBadge from '../components/ScopeBadge.vue';
import GetBadge from '../components/GetBadge.vue';
import PatchBadge from '../components/PatchBadge.vue';
</script>

# Base module

The base module is a module that contains resources that are shared between other modules.

The base url for Core modules is
`https://api.<environment>.onedhub.io/<orgId>/api/core/<resource>`

For more information about environments and url structure see [environment section](/onedhub/environments)

## Open API Specifications

You can find the Open API specifications for the different environments at the following URLs:
`https://api.<environment>.onedhub.io/<orgId>/api/core/swagger-ui/index.html`

Examples:

* `https://api.staging.onedhub.io/v2.ude.oslo.kommune.no/api/core/swagger-ui/index.html`
* `https://api.onedhub.io/v2.ude.oslo.kommune.no/api/core/swagger-ui/index.html`

## Resources

### Person

<hr/>
<p>
Endpoints 
<GetBadge path="/persons"/> <GetBadge path="/persons/{id}"/> <PatchBadge path="/persons/{id}"/>
</p>
<p>
Scope 
<ScopeBadge scopeShortName="core-api.persons.read"/>
<ScopeBadge scopeShortName="core-api.persons.write"/>
</p>
<hr/>


The `person` resource represents a physical private person. This resource has information about the person
that is related to the person private context. E.g. private email, mobile or address.

A person can be both a `student` and a `employee`.

#### Properties

| Property                         | Description                                                                                                                                                                                                                                                           | Writable | Example/Type                           |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------:|----------------------------------------|
| `id`                             | This is the system id in Vigilo                                                                                                                                                                                                                                       |          | `UUID`                                 |
| `firstName`                      | Given name of the person.                                                                                                                                                                                                                                             |          | Neil                                   |
| `lastName`                       | Surname of the person.                                                                                                                                                                                                                                                |          | Down                                   |
| `gender`                         | Gender of the person.                                                                                                                                                                                                                                                 |          | Can be: `male`, `female` or `notKnown` |
| `nationalIdresourceNumber`       | National identification number. Either a real one or a fictitious variant. An eleven-digit identification number that everyone registered in Norway has. The birth number consists of the date of birth (6 digits) and the personal identification number (5 digits). |          | `27078912345`                          |
| `contactInformation/email`       | Private email.                                                                                                                                                                                                                                                        |    x     |                                        |   
| `contactInformation/phoneNumber` | Private phone number. Could be either mobile or land line.                                                                                                                                                                                                            |    x     |                                        |   

#### Links

| Link          | Description                         | 
|---------------|-------------------------------------|
| `employments` | Link to list of `employee` objects. | 
| `students`    | Link to list of `student` objects.  |     
| `self`        | Link to it self.                    |         

### Student

<hr/>
<p>
Endpoints 
<GetBadge path="/students"/> <GetBadge path="/students/{id}"/> <PatchBadge path="/employess/{id}"/>
</p>
<p>
Scope
<ScopeBadge scopeShortName="core-api.students.read"/>
<ScopeBadge scopeShortName="core-api.students.write"/>
</p>
<hr/>



The `student` resource represents a `person` role as a student at a `school`. All information on the `student` object is
related to the student role.

#### Properties

| Property       | Description                                                                           | Writable | Example/Type           |
|----------------|---------------------------------------------------------------------------------------|:--------:|------------------------|
| `id`           | This is the system id in Vigilo                                                       |          | `UUID`                 |
| `alias`        | A human readable identifier for the employee                                          |    x     |                        |
| `fromDate`     | Start of the student enrollment for the school. ISO 8601 format `YYYY-MM-DD`          |          |                        |
| `toDate`       | End of the student enrollment for the school. ISO 8601 format `YYYY-MM-DD`            |          |                        |
| `modifiedTime` | Last time the object was modified in UTC time. ISO 8601 format `YYYY-MM-DDThh:mm:ssZ` |          | `2025-01-10T12:48:06Z` |

#### Links

| Link     | Description                          | 
|----------|--------------------------------------|
| `person` | Link to the students `person` object |              
| `school` | Link to the students `school` object |              
| `self`   | Link to it self.                     |              

### Employee

<hr/>
<p>
Endpoints 
<GetBadge path="/employees"/> <GetBadge path="/employess/{id}"/> <PatchBadge path="/employess/{id}"/>
</p>
<p>
Scope
<ScopeBadge scopeShortName="core-api.employees.read"/>
<ScopeBadge scopeShortName="core-api.employees.write"/>
</p>
<hr/>

The `employee` resource represents a `person` role as an employee at a `school`. All information on the `employee`
object
is related to the employee role.

#### Properties

| Property                         | Description                                                                           | Writable | Example/Type           |
|----------------------------------|---------------------------------------------------------------------------------------|:--------:|------------------------|
| `id`                             | This is the system id in Vigilo                                                       |          | `UUID`                 |
| `alias`                          | A human readable identifier for the employee                                          |    x     |                        |
| `fromDate`                       | Start of the employment. ISO 8601 format `YYYY-MM-DD`                                 |          |                        |
| `toDate`                         | End of the employment. ISO 8601 format `YYYY-MM-DD`                                   |          |                        |
| `employeeNumber`                 | Employee number from the HR-system.                                                   |          |                        |
| `contactInformation/email`       | Work email.                                                                           |    x     |                        |   
| `contactInformation/phoneNumber` | Work phone number. Could be either mobile or land line.                               |    x     |                        |   
| `modifiedTime`                   | Last time the object was modified in UTC time. ISO 8601 format `YYYY-MM-DDThh:mm:ssZ` |          | `2025-01-10T12:48:06Z` |

#### Links

| Link     | Description                          | 
|----------|--------------------------------------|
| `person` | Link to the students `person` object |              
| `school` | Link to the students `school` object |              
| `self`   | Link to it self.                     |    

### School

<Badge text="GET /schools" type="info"/>
<Badge text="GET /schools/{id}" type="info"/>

The `school` resource represents a school. The school resource has information about the school, like name, address,
`students` and `employees`.

#### Properties

| Property             | Description                                                                                                  | Writable | Example/Type |
|----------------------|--------------------------------------------------------------------------------------------------------------|:--------:|--------------|
| `id`                 | This is the system id in Vigilo                                                                              |          | `UUID`       |
| `name`               | Name of the school.                                                                                          |          |              |
| `shortName`          | Short name of the school.                                                                                    |          |              |
| `vigoId`             | Vigo ID.                                                                                                     |          |              |
| `schoolType`         | Type of school. Can be `elementarySchool`, `secondarySchool`, `combinedElementarySecondarySchool` or `other` |          |              |
| `startGrade`         | The first grade at the school.                                                                               |          | `1`          |   
| `endGrade`           | The last grade at the school.                                                                                |          | `10`         |   
| `discarded`          | If the school is no longer in use.                                                                           |          | `false`      |
| `organizationNumber` | Organization number from Enhetsregisteret. 9 digits.                                                         |          | `443322119`  |

#### Links

| Link        | Description                              | 
|-------------|------------------------------------------|
| `students`  | Link to list of students at the school.  |              
| `employees` | Link to list of employees at the school. |              
| `self`      | Link to it self.                         |

