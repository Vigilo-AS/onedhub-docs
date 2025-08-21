# OneRoster

OneRoster on OnEdHub is an implementation of
the [1EdTech OneRoster Specification: Norwegian Profile](https://www.imsglobal.org/spec/or-nor/v1p0).
The Norwegian profile is based on [OneRoster 1.2 specification](https://www.imsglobal.org/spec/oneroster/v1p2/).

[Vigilo AS](https://vigilo.no) is a [1EdTech contributing member](https://site.imsglobal.org/certifications/vigilo-as).
We're in the process of certifying our implementation of the Norwegian profile.

> NB: All helper endpoints is considered experimental and may not work as expected. Use main endpoints with filters
> instead.
> For example use 
>
> `/ims/rostering/v1p2/users?filter=roles.org.sourcedId='org sourced id' AND roles.role='teacher'`
> 
> instead of 
> 
>`/ims/oneroster/rostering/v1p2/schools/ce72fae0-8fa4-423c-86c0-44f855ce3a7c/teachers`
 