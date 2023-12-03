---

date: 2023-12-03
title: > 
    Export google cloud resources to terraform format
seo_title: export google cloud resources to terraform format
slug: google-cloud-resource-to-terraform
description: >
    Steps to export your google cloud resources crated using click OPs to terraform code for IAC
category: productivity
tags: [google-cloud, iac, terraform]
cta: gcp-to-terraform
site: blogsite
thumb: 'https://res.cloudinary.com/jenishjain/image/upload/v1701601252/portfolio/blog-assets/iac.jpg'
---

Usually while we are still figuring out stuffs , we tend to create our actual step in google cloud using ClickOps and now that is our production environment which we want to move to IAC later.

## So how can one migrate from ClickOps to IAC for google cloud

Well we already have a command line utility for this, read more about it [here](https://cloud.google.com/docs/terraform/resource-management/export#before-you-begin)

## Not a fan of documentation? here are the steps to follow

 ### 1. Authenticate with GCP and configure the target project.
  
```
> gcloud auth login

> gcloud config set project PROJECT_ID
```
 ### 2.  Install GCP's config-connector.

```
> gcloud components install config-connector
```

 ### 3. Now run the below command to start exporting your infrastructure, replace the output path and your project ID
  
```
> gcloud beta resource-config bulk-export \
 --path=OUTPUT_DIRECTORY_PATH \
 --project=PROJECT_ID \
 --resource-format=terraform
```

The export is arranged in the format:

> OUTPUT_DIRECTORY/projects/PROJECT_ID/RESOURCE_TYPE

For most of you, we are done here 🎉 . But for others who want to optimize their export.

## Nerd Alert

To get list of resources that can be exported using bulk-export command run [list-resource-types](https://cloud.google.com/sdk/gcloud/reference/beta/resource-config/list-resource-types)

```
> gcloud beta resource-config list-resource-types
```

Also if your setup is too large and taking time , you can selectively import only the required ones using [--resource-types=](https://cloud.google.com/docs/terraform/resource-management/export#export_a_single_resource_type)

## Resources

* [GCP documentation](https://cloud.google.com/docs/terraform/resource-management/export#before-you-begin)
* [Another medium article on the same topic](https://medium.com/google-cloud/exporting-gcp-projects-to-terraform-c7b3b48525a0)
