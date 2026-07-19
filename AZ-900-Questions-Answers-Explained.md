# Microsoft Azure AZ-900 (Microsoft Azure Fundamentals) — Practice Questions, Answers & Explanations

Practice mode: all options are shown unchecked so you can self-test. Each question is followed by the correct **Answer** and a brief **Explanation** of why.

Total questions: 485

---

### 1. If you plan to host a web application in the Azure platform as a service solution of Azure Web Apps, then the platform will have the ability to scale automatically?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure App Service (PaaS) supports autoscale rules based on metrics or schedule, so web apps can scale out/in automatically.

### 2. You decide to create 2 Virtual machines. Each virtual machine is of the size D2s v3. Would these machines always generate the same monthly cost?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** VM cost depends on region, pricing tier, reserved instance discounts, and uptime — same size doesn't guarantee same monthly cost.

### 3. Your team needs to have a tool that provides a digital online assistant that can provide speech support. Which of the following service can be used for this purpose?

- [ ] Azure Machine Learning.
- [ ] Azure loT Hub.
- [ ] Azure Al bot.
- [ ] Azure Functions.

**Answer:** Azure Al bot.

**Explanation:** Azure Bot Service (Azure AI Bot) provides conversational, speech-enabled digital assistants.

### 4. Your team needs to have a tool that can use past trainings to provide predictions of very high probability. Which of the following service can be used for this purpose?

- [ ] Azure Machine Learning.
- [ ] Azure loT Hub.
- [ ] Azure Al bot.
- [ ] Azure Functions.

**Answer:** Azure Machine Learning.

**Explanation:** Azure Machine Learning is built to train models on historical data and generate high-confidence predictions.

### 5. Your team needs to have a tool that can provide serverless computing capabilities. Which of the following service can be used for this purpose?

- [ ] Azure Machine Learning.
- [ ] Azure loT Hub.
- [ ] Azure Al bot.
- [ ] Azure Functions.

**Answer:** Azure Functions.

**Explanation:** Azure Functions is Azure's serverless compute offering — you pay only for execution time, no server management.

### 6. Your team needs to have a tool that can be used to process data from millions of sensors. Which of the following service can be used for this purpose?

- [ ] Azure Machine Learning.
- [ ] Azure loT Hub.
- [ ] Azure Al bot.
- [ ] Azure Functions.

**Answer:** Azure loT Hub.

**Explanation:** Azure IoT Hub is a managed service designed for bidirectional communication with millions of IoT devices/sensors.

### 7. A company needs to deploy a set of resources to Azure. Below are the key requirements for the deployment: The need to be deployed across several departments. The resources that need to be deployed are all of the same type. You need to recommend a solution to automate the deployment of the Azure resources. Which of the following would you use for this requirement?

- [ ] Virtual Machine scale sets.
- [ ] Management Groups.
- [ ] Microsoft Entra ID.
- [ ] Azure Resource Manager Templates.

**Answer:** Azure Resource Manager Templates.

**Explanation:** ARM templates let you define resources declaratively (JSON) and repeatedly deploy identical resource sets across departments.

### 8. Your company needs to deploy an application to virtual machines hosted in Azure. The solution must ensure an SLA of 99.99%. What is the minimum number of virtual machines and availability zones that you need to recommend for the deployment?

- [ ] One virtual machine and One availability zone.
- [ ] Two virtual machines and availability zone.
- [ ] One virtual machine and Two availability zones.
- [ ] Two virtual machines and Two availability zones.

**Answer:** Two virtual machines and Two availability zones.

**Explanation:** A single VM/zone gives at most 99.9% SLA; 2+ VMs across 2+ Availability Zones is required to reach 99.99%.

### 9. Your team needs a tool that can be used to correlate events from multiple resources into a central repository. Which of the following can be used for this purpose?

- [ ] Azure Event Hubs.
- [ ] Microsoft Defender for Cloud.
- [ ] Microsoft Entra ID.
- [ ] Azure Log Analytics.

**Answer:** Azure Log Analytics.

**Explanation:** Azure Log Analytics (part of Azure Monitor) collects and correlates log/event data from multiple resources in one workspace.

### 10. A company is planning on hosting an application on an Azure Virtual Machine. It needs to be ensured that the application hosted on the virtual machine is accessible from the Internet over HTTPS. You decide to implement a DDoS protection plan. Would this satisfy the requirement?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A DDoS protection plan defends against volumetric attacks but doesn't open network access — it won't make the VM reachable over HTTPS.

### 11. A company is planning on hosting an application on an Azure Virtual Machine. It needs to be ensured that the application hosted on the virtual machine is accessible from the Internet over HTTPS. You decide to implement an Azure Traffic Manager profile. Would this satisfy the requirement?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Traffic Manager works at DNS-level routing across regions; it doesn't open ports/firewall rules needed for HTTPS access.

### 12. Which of the following customers are eligible to use Azure Government to develop a cloud solution? Choose 2 answers from the options given below.

- [ ] United states government Entity.
- [ ] A United states government contractor.
- [ ] A European government Entity.
- [ ] A European government contractor.

**Answer:** United states government Entity.; A United states government contractor.

**Explanation:** Azure Government is limited to US federal, state, local government entities and their solution provider/contractors — not international governments.

### 13. A team is currently planning on using Azure for hosting resources. They are going to create users which would have access to the Azure resources. They want to implement Multi-Factor authentication for the users. Is it required to deploy a federated solution to implement Multi-Factor authentication?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** MFA in Azure AD/Entra ID doesn't require federation (like ADFS); it can be enabled directly on cloud-only accounts.

### 14. A team is currently planning on using Azure for hosting resources. They are going to create users which would have access to the Azure resources. They want to implement Multi-Factor authentication for the users. Are two valid methods for Azure Multi-Factor authentication picture identification and entering a passport number.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Valid MFA methods are phone call, SMS, authenticator app notification/code, or hardware token — not picture ID or passport number.

### 15. Which of the following support plan gives you access to best practice information, health status and notifications, and 24/7 access to billing information at the lowest possible cost.

- [ ] Basic.
- [ ] Standard.
- [ ] Premier.
- [ ] Developer.

**Answer:** Basic.

**Explanation:** The Basic support plan includes best-practice guidance, health/notifications, and 24/7 billing support at the lowest cost tier (above Free).

### 16. If you plan to host a web application in the Azure platform as a service solution of Azure Web Apps, then you will have complete control over the underlying operating system.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** PaaS web apps abstract away the OS — Microsoft manages patching/OS, so you don't get full OS-level control (that's IaaS).

### 17. You decide to create a virtual machine which is of the size D2s_v3. If you plan to stop the virtual machine, will you incur any costs for the storage associated with the virtual machine.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Stopping (not deallocating properly, or even deallocated) a VM still incurs storage costs for the attached disks.

### 18. Your company is planning on using Azure for hosting Infrastructure level resources such as Azure Virtual Machines. When planning for the costing aspect for these resources, is there a flexibility offered when it comes to Capital and Operational Expenditure.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure lets you shift from CapEx (buying hardware) to OpEx (pay-as-you-go), giving budgeting flexibility.

### 19. You are looking at using a Software as a Service in Azure. Which of the following would you be responsible for?

- [ ] High availability of the solution.
- [ ] Configuration of the solution.
- [ ] Installing the solution.
- [ ] Scalability of the solution.

**Answer:** Configuration of the solution.

**Explanation:** With SaaS, the provider manages infrastructure/platform; the customer is only responsible for configuring/using the app itself.

### 20. A company is planning on migrating all of their on-premises servers to Azure. Their business continuity department has advised that they need to ensure that servers hosted in Azure are available even if an Azure Data Center were to go down. Which of the following is a concept that would be involved in the design stage for this requirement.

- [ ] Scalability.
- [ ] Fault Tolerance.
- [ ] Low Latency.
- [ ] Elasticity.

**Answer:** Fault Tolerance.

**Explanation:** Fault tolerance is the design principle for surviving a datacenter outage (e.g., via Availability Zones).

### 21. Under which of the following circumstances could a company look at decommissioning its data center?

- [ ] If they have their infrastructure hosted in a private cloud.
- [ ] If they have their infrastructure hosted in the public cloud.
- [ ] If they have their infrastructure hosted in a hybrid cloud.

**Answer:** If they have their infrastructure hosted in the public cloud.

**Explanation:** Full migration to the public cloud removes the need to maintain physical, on-premises infrastructure entirely.

### 22. A company is planning on migrating a web site to Azure. This is a public web site that is used by users on the Internet. Which of the following must the company plan for if they are planning to migrate the web site to Azure?

- [ ] They would need to deploy a VPN.
- [ ] They would need to pay for the cost to transfer the web site to Azure.
- [ ] They would need to pay for the monthly costs incurred for hosting the web site.
- [ ] They would need to pay for the number of connections to the web site.

**Answer:** They would need to pay for the monthly costs incurred for hosting the web site.

**Explanation:** Public-facing Azure resources incur ongoing consumption-based (monthly) hosting costs, unlike a one-time data transfer fee.

### 23. An administrator needs to run a script written in PowerShell. This script is going to create a virtual machine in Azure. Would the script run on a computer that runs Linux and has the Azure CLI tools installed?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** PowerShell scripts do not run natively on Linux with just Azure CLI tools installed unless PowerShell Core is also installed.

### 24. An administrator needs to run a script written in PowerShell. This script is going to create a virtual machine in Azure. Would you be able to run the script on a machine that has Chrome OS installed and uses Azure Cloud Shell?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Cloud Shell (in a browser) runs PowerShell regardless of the underlying OS, including Chrome OS.

### 25. An administrator needs to run a script written in PowerShell. This script is going to create a virtual machine in Azure. Would you be able to run the script on a machine that has macOS and PowerShell core installed?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** PowerShell Core 6.0+ is cross-platform and runs on macOS.

### 26. An Administrator needs to view the list of planned maintenance events that could potentially affect the availability of the resources hosted in an Azure subscription. Which of the following blade in the Azure portal should the administrator consider for this requirement?

- [ ] Resource Groups.
- [ ] Microsoft Entra ID.
- [ ] Azure Advisor.
- [ ] Help + Support.

**Answer:** Help + Support.

**Explanation:** The Help + Support blade shows Azure Service Health / planned maintenance notifications affecting your subscription.

### 27. Your team needs to have an integrated solution in place that can be used for the deployment of code. Which of the following service can be used for this purpose?

- [ ] Azure Advisor.
- [ ] Azure Cognitive Services.
- [ ] Azure Application Insights.
- [ ] Azure DevOps.

**Answer:** Azure DevOps.

**Explanation:** Azure DevOps provides CI/CD pipelines for building and deploying code.

### 28. Your team needs a tool that can provide guidance and recommendations that can be used to improve an Azure environment. Which of the following service can be used for this purpose?

- [ ] Azure Advisor.
- [ ] Azure Cognitive Services.
- [ ] Azure Application Insights.
- [ ] Azure DevOps.

**Answer:** Azure Advisor.

**Explanation:** Azure Advisor analyzes your environment and gives personalized recommendations (cost, security, reliability, performance).

### 29. Your team needs to use a tool that can be used to build intelligent Artificial Intelligence based applications. Which of the following service can be used for this purpose?

- [ ] Azure Advisor.
- [ ] Azure Cognitive Services.
- [ ] Azure Application Insights.
- [ ] Azure DevOps.

**Answer:** Azure Cognitive Services.

**Explanation:** Azure Cognitive Services provides pre-built AI APIs (vision, speech, language) for building intelligent apps.

### 30. Your team needs to have a tool that can be used to monitor web applications deployed to Azure. Which of the following service can be used for this purpose?

- [ ] Azure Advisor.
- [ ] Azure Cognitive Services.
- [ ] Azure Application Insights.
- [ ] Azure DevOps.

**Answer:** Azure Application Insights.

**Explanation:** Azure Application Insights (part of Azure Monitor) is an APM tool for monitoring live web applications.

### 31. A team currently has several computers in their on-premises environment that runs on Windows 10. They need to share files by enabling mapped drives from the computers. Which of the following would be an ideal storage solution for this requirement?

- [ ] Using the Azure storage - BLOB service.
- [ ] Using the Azure storage - File service.
- [ ] Using the Azure storage - Queue service.
- [ ] Using the Azure storage - Table service.

**Answer:** Using the Azure storage - File service.

**Explanation:** Azure Files provides SMB file shares that can be mapped as network drives from Windows machines.

### 32. A company wants to have a data store hosted in Azure. Below are the key requirements for the data store: The data store must be able to store JSON documents. The data store must be able to handle data writes from multiple regions. Which of the following would be the ideal data store for this requirement?

- [ ] Azure SQL Database.
- [ ] Azure Cosmos DB.
- [ ] Azure Redis Cache.
- [ ] Azure Synapse Analytics.

**Answer:** Azure Cosmos DB.

**Explanation:** Azure Cosmos DB is a globally distributed, multi-model database that natively stores JSON and supports multi-region writes.

### 33. A team is planning on deploying Azure Virtual Machines to a resource group named demogroup. The group has been created in the US Central region. Do the virtual machines deployed to the resource group also need to be deployed to the US Central region only?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Resources in a resource group can be deployed to any Azure region, independent of the resource group's own region (which is just metadata storage location).

### 34. A team is planning on assigning tags to a resource group. Would the tag be inherited by resources in the resource group?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Tags applied to a resource group are NOT automatically inherited by the resources inside it.

### 35. A set of IAM permissions have been assigned to a resource group. Would the resources in the resource group automatically inherit the IAM permissions assigned to the resource group?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure RBAC/IAM permissions assigned at the resource group level ARE inherited by resources within it.

### 36. Which of the following service can be used to build, test and deploy a predictive analytics solution that could subsequently be used to deploy an Artificial Intelligence solution to Azure?

- [ ] Azure Functions.
- [ ] Azure Logic Apps.
- [ ] Azure Batch.
- [ ] Azure Machine Learning Studio.

**Answer:** Azure Machine Learning Studio.

**Explanation:** Azure Machine Learning Studio (Designer) is the tool for building, testing, and deploying predictive analytics/ML models.

### 37. Your team is planning on using the Azure Advisor tool. Would the Azure Advisor tool give recommendations on how to configure network settings for Azure virtual machines?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Advisor doesn't provide detailed network configuration guidance for VMs — it focuses on cost, reliability, performance, security categories at a higher level.

### 38. Your team is planning on using the Azure Advisor tool. Would the Azure Advisor tool give recommendations on how to save costs when it comes to hosting virtual machines in Azure?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Advisor's Cost category specifically recommends resizing/shutting down underused VMs to save money.

### 39. Your team is planning on using the Azure Advisor tool. Would the Azure Advisor tool give recommendations on how to improve the security for Microsoft Entra ID?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Advisor doesn't cover Microsoft Entra ID security recommendations — that's handled by Microsoft Entra ID recommendations/Identity Secure Score.

### 40. A support engineer currently has a computer that runs Ubuntu. Which of the following Azure Management tools could be run from this computer?

- [ ] Azure CLI.
- [ ] Azure PowerShell.
- [ ] The Azure Portal.

**Answer:** Azure CLI.; Azure PowerShell.; The Azure Portal.

**Explanation:** Azure CLI, Azure PowerShell (cross-platform via PowerShell Core), and the web-based Azure Portal all work on Ubuntu.

### 41. Your company has just setup an Azure account and Microsoft Entra ID. They need to ensure that when users connect to Microsoft Entra ID from the Internet from an Anonymous IP address, they are prompted to change their password automatically. Which of the following Azure service can help them achieve this requirement?

- [ ] Microsoft Entra Connect.
- [ ] Microsoft Entra ID Protection.
- [ ] Microsoft Entra Privileged Identity Management.
- [ ] Microsoft Defender for Identity.

**Answer:** Microsoft Entra ID Protection.

**Explanation:** Microsoft Entra ID Protection detects risky sign-ins (e.g., anonymous IP) and can force password resets automatically.

### 42. A company is planning on creating several virtual machines that will be used to host web and database servers. You need to limit the type of connections from the web and database servers. Which of the following can be used to fulfil this requirement?

- [ ] Network Security Groups.
- [ ] Microsoft Entra ID Protection.
- [ ] Azure VPN.
- [ ] Azure Route tables.

**Answer:** Network Security Groups.

**Explanation:** Network Security Groups (NSGs) filter inbound/outbound traffic by port/protocol/source, limiting connections between VM tiers.

### 43. Which of the following can be used to allow an organization to manage the compliance of resources across multiple subscriptions?

- [ ] Resource Groups.
- [ ] Management Groups.
- [ ] Azure Policies.
- [ ] Azure Resource Manager templates.

**Answer:** Azure Policies.

**Explanation:** Azure Policy enforces and audits compliance rules on resources, and can be applied across multiple subscriptions via management groups.

### 44. Your company is planning on setting an Azure environment by setting up a subscription and Microsoft Entra ID. They need to purchase a low-cost option support plan. The support plan needs to ensure 24*7 access to support engineers by phone or email. You suggest opting for the Basic Support plan. Does this support the requirement?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** The Basic support plan does not include phone/email support access — it's limited to online guidance and billing support.

### 45. Your company is planning on setting an Azure environment by setting up a subscription and Microsoft Entra ID. They need to purchase a low-cost option support plan. The support plan needs to ensure 24*7 access to support engineers by phone or email. You suggest opting for the Standard Support plan. Does this support the requirement?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** The Standard support plan includes 24/7 phone and email access to support engineers at a relatively low cost.

### 46. Does Microsoft release most of the Azure services in private preview before being introduced in public preview?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft typically rolls out new services in private preview first, then public preview, before general availability (GA).

### 47. Is it true that Azure services released in public preview can only be managed via the Azure command line interface?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Public preview services can be managed via Portal, CLI, PowerShell, or SDKs — not CLI-only.

### 48. Is it true that an Azure service that is released in private preview is made available to all Azure customers?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Private preview is invite-only/limited access, not available to all customers.

### 49. Is it true that an Azure service that is released in public preview is made available to all Azure customers?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Public preview services ARE available to all Azure customers to try (with caveats — no SLA).

### 50. Is it true that an Azure service that is released as generally available is made available to all Azure customers?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** General availability (GA) means the service is fully released and available to all customers with SLA support.

### 51. Can a single Microsoft Account be used to manage multiple Azure subscriptions?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** A single Microsoft account (or Entra ID account) can be linked to and manage multiple Azure subscriptions.

### 52. Is it possible to merge subscriptions into a single subscription?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure subscriptions cannot be merged into one; resources must instead be moved between subscriptions.

### 53. A company has just started using Azure. They have setup a subscription and started deploying resources to Azure. Would they be guaranteed a service level agreement of at least 99.9% for paid Azure services?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Paid Azure services carry a minimum guaranteed SLA of at least 99.9% uptime per Microsoft's SLA documents.

### 54. A company has just started using Azure. They have setup a subscription and started deploying resources to Azure. Could the company increase the SLA for their resources by deploying resources across multiple regions?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Deploying across multiple regions/Availability Zones increases the composite/effective availability of a solution.

### 55. A company has just started using Azure. They have setup a subscription and started deploying resources to Azure. Could the company increase the SLA for their resources by purchasing multiple subscriptions?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Simply buying more subscriptions does not increase the SLA of any given resource — SLA is tied to how the resource itself is architected.

### 56. A set of virtual machines have been created in a subscription. You have now paid for a new subscription. Is it possible to move the virtual machines to the new subscription?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure allows moving resources like VMs between subscriptions (within the same Entra ID tenant, subject to resource support).

### 57. A company has defined the following resources in Azure: 10 Public IP addresses. 20 users in Microsoft Entra ID. 5 user groups in Microsoft Entra ID. They now want to reduce the costs associated with the Azure account. Would the removal of the users from the account help reduce the cost?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** User accounts themselves are typically free in Microsoft Entra ID (cost depends on licensing, not raw account count) — removing them won't materially cut infra costs here.

### 58. A company has defined the following resources in Azure: 10 Public IP addresses. 20 users in Microsoft Entra ID. 5 user groups in Microsoft Entra ID. They now want to reduce the costs associated with the Azure account. Would the removal of the user groups from the account help reduce the cost?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Entra ID groups are free objects; removing them doesn't directly reduce billed Azure costs.

### 59. A company has defined the following resources in Azure: 10 Public IP addresses. 20 users in Microsoft Entra ID. 5 user groups in Microsoft Entra ID. They now want to reduce the costs associated with the Azure account. Would the removal of the public IP addresses from the account help reduce the cost?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Public IP addresses are billable resources — removing unused ones directly reduces cost.

### 60. A team member currently has a laptop that is based on the Android OS. The team member wants to create a virtual machine in Azure. The team member decides to use the Azure portal to create the virtual machine. Would this suit the purpose?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** The Azure Portal is a responsive web app accessible from any modern browser, including on Android.

### 61. A team member currently has a laptop that is based on the Android OS. The team member wants to create a virtual machine in Azure. The team member decides to use the PowerApps portal to create the virtual machine. Would this suit the purpose?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** The PowerApps portal is for building business apps, not for provisioning VMs — it doesn't support VM creation.

### 62. Which of the following URL is used to manage the creation of Azure resources?

- [ ] `https://admin.azure.com`.
- [ ] `https://admin.azurewebsites.com`.
- [ ] `https://portal.microsoft.com`.
- [ ] `https://portal.azurewebsites.com`.
- [ ] `https://portal.azure.com`.

**Answer:** `https://portal.azure.com`.

**Explanation:** https://portal.azure.com is the Azure Portal used to create and manage all Azure resources.

### 63. You need to create a virtual machine in Azure. Which of the following storage account service is used to store the data disks for the virtual machine?

- [ ] Blobs.
- [ ] Files.
- [ ] Tables.
- [ ] Queues.

**Answer:** Blobs.

**Explanation:** VM data disks are backed by the Blob storage service (page blobs / managed disks built on Blob storage).

### 64. Your company needs to have a data store in Azure. Below are the key requirements for the data store: The data store should be capable of storing 10TB of data. The data would be accessed infrequently. The data would need to be visualised using PowerBI. Which of the following services could you use for this requirement? Choose 2 answers from the options given below.

- [ ] Azure SQL database.
- [ ] Azure Synapse Analytics.
- [ ] Azure Data Lake.
- [ ] Azure Cosmos DB.

**Answer:** Azure Synapse Analytics.; Azure Data Lake.

**Explanation:** Azure Synapse Analytics (data warehousing/analytics) and Azure Data Lake (large-scale storage) together fit large infrequently-accessed data visualized with Power BI.

### 65. You need to deploy several virtual machines to Azure. You need to ensure that you can assign permissions to the virtual machines simultaneously. Which of the following can be implemented to fulfil this requirement?

- [ ] Deploy all the virtual machines to the same region.
- [ ] Deploy all the virtual machines to the same resource group.
- [ ] Deploy all the virtual machines to the same availability zone.
- [ ] Deploy all the virtual machines to the same scale.

**Answer:** Deploy all the virtual machines to the same resource group.

**Explanation:** Assigning IAM roles at the resource group level lets you manage permissions for all VMs inside it simultaneously — so deploy them into one resource group.

### 66. Which of the following is a benefit of moving on-premises servers to the Azure cloud environment?

- [ ] The Azure platform is a public cloud platform wherein all the resources can be accessed by the public.
- [ ] The Azure platform is a private cloud platform wherein all the resources can be accessed only by a private handful of people.
- [ ] The Azure platform is a shared platform wherein multiple companies can use a portion of the resources on the platform.
- [ ] The Azure platform is an ecommerce platform wherein users can buy and sell resources as required.

**Answer:** The Azure platform is a shared platform wherein multiple companies can use a portion of the resources on the platform.

**Explanation:** The public cloud is a shared multi-tenant platform where many organizations use portions of the same infrastructure.

### 67. What are two key characteristics of the public cloud?

- [ ] Dedicated hardware resources.
- [ ] Shared infrastructure.
- [ ] Pay-as-you-go model.
- [ ] On-premises deployment.
- [ ] Limited geographic availability.

**Answer:** Shared infrastructure.; Pay-as-you-go model.

**Explanation:** Public cloud is defined by shared/multi-tenant infrastructure and consumption-based (pay-as-you-go) billing.

### 68. Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure App Service and Azure SQL databases. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** App Service and Azure SQL Database are both PaaS offerings, matching the PaaS-only requirement.

### 69. You plan to migrate a web application to Azure. The web application is accessed by external users. You need to recommend a cloud deployment solution to minimize the amount of administrative effort used to manage the web application. What should you include in the recommendation?

- [ ] Software as a Service (SaaS).
- [ ] Platform as a Service (PaaS).
- [ ] Infrastructure as a Service (laaS).
- [ ] Database as a Service (DaaS).

**Answer:** Platform as a Service (PaaS).

**Explanation:** PaaS minimizes admin effort (no OS/patching) while still allowing app deployment/customization — ideal for a web app.

### 70. You have an on-premises network that contains 100 servers. You need to recommend a solution that provides additional resources to your users. The solution must minimize capital and operational expenditure costs. What should you include in the recommendation?

- [ ] A complete migration to the public cloud.
- [ ] An additional data center.
- [ ] A private cloud.
- [ ] A hybrid cloud.

**Answer:** A hybrid cloud.

**Explanation:** A hybrid cloud extends on-prem capacity into the cloud without full migration, balancing CapEx/OpEx.

### 71. You plan to migrate several servers from an on-premises network to Azure. What is an advantage of using a public cloud service for the servers over an on-premises network?

- [ ] The public cloud is owned by the public, NOT a private corporation.
- [ ] The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud.
- [ ] All public cloud resources can be freely accessed by every member of the public.
- [ ] The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud.

**Answer:** The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud.

**Explanation:** Public cloud is a shared multi-tenant resource pool — that's its defining advantage/characteristic over on-prem.

### 72. You have 1,000 virtual machines hosted on the Hyper-V hosts in a data center. You plan to migrate all the virtual machines to an Azure pay-as-you-go subscription. You need to identify which expenditure model to use for the planned Azure solution. Which expenditure model should you identify?

- [ ] Operational.
- [ ] Elastic.
- [ ] Capital.
- [ ] Scalable.

**Answer:** Operational.

**Explanation:** Pay-as-you-go consumption billing is an Operational Expenditure (OpEx) model, not Capital Expenditure.

### 73. You plan to provision Infrastructure as a Service (laaS) resources in Azure. Which resource is an example of laaS?

- [ ] An Azure web app.
- [ ] An Azure virtual machine.
- [ ] An Azure logic app.
- [ ] An Azure SQL database.

**Answer:** An Azure virtual machine.

**Explanation:** A virtual machine (raw compute you manage the OS of) is the classic IaaS example.

### 74. A team of developers at your company plans to deploy, and then remove, 50 virtual machines each week. All the virtual machines are configured by using Azure Resource Manager templates. You need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines. What should you recommend?

- [ ] Azure Reserved Virtual Machine (VM) Instances.
- [ ] Azure DevTest Labs.
- [ ] Azure virtual machine scale sets.
- [ ] Microsoft Managed Desktop.

**Answer:** Azure DevTest Labs.

**Explanation:** Azure DevTest Labs is built exactly for quickly provisioning/tearing down dev/test VMs using templates, minimizing admin effort.

### 75. Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure virtual machines, Azure SQL databases, and Azure Storage accounts. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** This uses VMs (IaaS) and Storage accounts alongside SQL DB — VMs are not PaaS, so the migration plan (PaaS-only) is not met.

### 76. Your company plans to deploy several custom applications to Azure. The applications will provide invoicing services to the customers of the company. Each application will have several prerequisite applications and services installed. You need to recommend a cloud deployment solution for all the applications. What should you recommend?

- [ ] Software as a Service (SaaS).
- [ ] Platform as a Service (PaaS).
- [ ] Infrastructure as a Service (laas).

**Answer:** Infrastructure as a Service (laas).

**Explanation:** Custom apps needing full control over prerequisite software/dependencies fit IaaS, which gives full OS/runtime control.

### 77. [An Azure region] contains one or more data centers that are connected by using a low-latency network.

- [ ] No change is needed.
- [ ] Is found in each country where Microsoft has a subsidiary office.
- [ ] Can be found in every country in Europe and the Americas only.
- [ ] Contains one or more data centers that are connected by using a high-latency network.

**Answer:** No change is needed.

**Explanation:** An Azure region is one or more datacenters connected via a low-latency network — the statement is already correct.

### 78. A support engineer plans to perform several Azure management tasks by using the Azure CLI. You install the CLI on a computer. You need to tell the support engineer which tools to use to run the CLI. Which two tools should you instruct the support engineer to use?

- [ ] Command Prompt.
- [ ] Azure Resource Explorer.
- [ ] Windows PowerShell.
- [ ] Windows Defender Firewall.
- [ ] Network and Sharing Center.

**Answer:** Command Prompt.; Windows PowerShell.

**Explanation:** Azure CLI runs from both Command Prompt and Windows PowerShell (or any terminal) once installed on Windows.

### 79. You plan to store 20 TB of data in Azure. The data will be accessed infrequently and visualized by using Microsoft Power BI. You need to recommend a storage solution for the data Which two solutions should you recommend?

- [ ] Azure Data Lake.
- [ ] Azure Cosmos DB.
- [ ] Azure Synapse Analytics.
- [ ] Azure SQL Database.
- [ ] Azure Database for PostgreSQL.

**Answer:** Azure Data Lake.; Azure Synapse Analytics.

**Explanation:** Azure Data Lake (storage for large infrequently accessed data) plus Azure Synapse Analytics (querying/visualizing via Power BI) fit the scenario.

### 80. You need to identify the type of failure for which an Azure Availability Zone can be used to protect access to Azure services. What should you identify?

- [ ] A physical server failure.
- [ ] An Azure region failure.
- [ ] A storage failure.
- [ ] An Azure data center failure.

**Answer:** An Azure data center failure.

**Explanation:** Availability Zones protect against a datacenter-level failure by physically separating zones within a region.

### 81. You have a virtual machine named VM1 that runs Windows Server 2016. VM1 is in the East US Azure region. Which Azure service should you use from the Azure portal to view service failure notifications that can affect the availability of VM1?

- [ ] Azure Service Fabric.
- [ ] Azure Monitor.
- [ ] Azure virtual machines.
- [ ] Azure Advisor.

**Answer:** Azure virtual machines.

**Explanation:** The Azure Virtual Machines blade (specifically its 'Notifications'/health section) shows service issue notifications for that VM.

### 82. An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Linux and has the Azure CLI tools installed. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Native PowerShell scripts don't run just because CLI tools are installed on Linux — you'd need PowerShell Core, not the CLI.

### 83. An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Chrome OS and uses Azure Cloud Shell Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Cloud Shell (browser-based) runs PowerShell regardless of the client OS, including Chrome OS.

### 84. You have an Azure environment that contains 10 virtual networks and 100 virtual machines You need to limit the amount of inbound traffic to all the Azure virtual network. What should you create?

- [ ] One application security group (ASG).
- [ ] 10 virtual network gateways.
- [ ] 10 Azure ExpressRoute circuits.
- [ ] One Azure firewall.

**Answer:** One Azure firewall.

**Explanation:** Azure Firewall is a centralized, managed firewall that can filter/limit inbound traffic across multiple VNets from one place.

### 85. You have an Azure environment that contains multiple Azure virtual machines. You plan to implement a solution that enables the client computers on your on-premises network to communicate to the Azure virtual machines. You need to recommend which Azure resources must be created for the planned solution. Which two Azure resources should you include in the recommendation?

- [ ] A virtual network gateway.
- [ ] A load balancer.
- [ ] An application gateway.
- [ ] A virtual network.
- [ ] A gateway subnet.

**Answer:** A virtual network gateway.; A gateway subnet.

**Explanation:** A Site-to-Site VPN needs a virtual network gateway deployed into a gateway subnet to connect on-prem clients to Azure VMs.

### 86. You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use Bash in Azure Cloud Shell. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Bash in Azure Cloud Shell runs in-browser and works from any device including Android tablets.

### 87. Your company plans to move several servers to Azure. The company compliance policy states that a server named FinServer must be on a separate network segment. You are evaluating which Azure services can be used to meet the compliance policy requirements. Which Azure solution should you recommend?

- [ ] A resource group for FinServer and another resource group for all the other servers.
- [ ] A virtual network for FinServer and another virtual network for all the other servers.
- [ ] A VPN for FinServer and a virtual network gateway for another server.
- [ ] One resource group for all the servers and a resource lock for FinServer.

**Answer:** A virtual network for FinServer and another virtual network for all the other servers.

**Explanation:** Putting FinServer in its own separate virtual network isolates it at the network segmentation level, satisfying compliance.

### 88. You plan to map a network drive from several computers that run Windows 10 to Azure Storage. You need to create a storage solution in Azure for the planned mapped drive. What should you create?

- [ ] An Azure SQL database.
- [ ] A virtual machine data disk.
- [ ] A Files service in a storage account.
- [ ] A Blobs service in a storage account.

**Answer:** A Files service in a storage account.

**Explanation:** Azure Files (SMB protocol) is the service designed to be mapped as a network drive.

### 89. Your company plans to migrate all its network resources to Azure. You need to start the planning process by exploring Azure. What should you create first?

- [ ] A subscription.
- [ ] A resource group.
- [ ] A virtual network.
- [ ] A management group.

**Answer:** A subscription.

**Explanation:** A subscription is the foundational container you must create first before deploying any Azure resources.

### 90. You have an on-premises application that sends email notifications automatically based on a rule, You plan to migrate the application to Azure. You need to recommend a serverless computing solution for the application. What should you include in the recommendation?

- [ ] A web app.
- [ ] A server image in Azure Marketplace.
- [ ] A logic app.
- [ ] An API app.

**Answer:** A logic app.

**Explanation:** Azure Logic Apps orchestrates workflows/triggers (like rule-based email notifications) using serverless, low-code automation.

### 91. You plan to deploy a website to Azure. The website will be accessed by users worldwide and will host large video files. You need to recommend which Azure feature must be used to provide the best video playback experience. What should you recommend?

- [ ] An application gateway.
- [ ] An Azure ExpressRoute circuit.
- [ ] A content delivery network (CDN).
- [ ] An Azure Traffic Manager profile.

**Answer:** A content delivery network (CDN).

**Explanation:** A CDN caches content (like video) at edge locations globally for faster playback for worldwide users.

### 92. Your company plans to deploy several million sensors that will upload data to Azure. You need to identify which Azure resources must be created to support the planned solution. Which two Azure resources should you identify?

- [ ] Azure Data Lake.
- [ ] Azure Queue storage.
- [ ] Azure File Storage.
- [ ] Azure IoT Hub.
- [ ] Azure Notification Hubs.

**Answer:** Azure Data Lake.; Azure IoT Hub.

**Explanation:** Azure IoT Hub ingests device telemetry at scale, and Azure Data Lake stores the resulting large volumes of sensor data.

### 93. You have an Azure web app. You need to manage the settings of the web app from an iPhone. What are two Azure management tools that you can use?

- [ ] Azure CLI.
- [ ] The Azure portal.
- [ ] Azure Cloud Shell.
- [ ] Windows PowerShell.
- [ ] Azure Storage Explorer.

**Answer:** The Azure portal.; Azure Cloud Shell.

**Explanation:** The Azure Portal (browser) and Azure Cloud Shell (browser-based) both work from an iPhone; native CLI/PowerShell apps do not.

### 94. Company plans to deploy an Artificial Intelligence (AI) solution in Azure. What should the company use to build, test, and deploy predictive analytics solutions?

- [ ] Azure Logic Apps.
- [ ] Azure Machine Learning Studio.
- [ ] Azure Batch.
- [ ] Azure Cosmos DB.

**Answer:** Azure Machine Learning Studio.

**Explanation:** Azure Machine Learning Studio (Designer) is used to build, test, and deploy predictive analytics models.

### 95. You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. `az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys`. You need to create VM1 in Subscription1 by using the command. Solution: From the Azure portal, launch Azure Cloud Shell and select PowerShell. Run the command in Cloud Shell. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Cloud Shell's PowerShell mode runs PowerShell commands, but the `az vm create` command is Azure CLI syntax — you'd need Bash/CLI mode, not PowerShell, unless adapted; per the source answer here it's marked No.

### 96. An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs Windows 10 and has the Azure PowerShell module installed. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Windows 10 with the Azure PowerShell module installed can run PowerShell scripts that create Azure resources directly.

### 97. Which service provides serverless computing in Azure?

- [ ] Azure Virtual Machines.
- [ ] Azure Functions.
- [ ] Azure storage account.
- [ ] Azure Container Instances.

**Answer:** Azure Functions.

**Explanation:** Azure Functions is Azure's serverless (event-driven, consumption-billed) compute service.

### 98. You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. `az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys`. You need to create VM1 in Subscription1 by using the command. Solution: From the Azure portal, launch Azure Cloud Shell and select Bash. Run the command in Cloud Shell. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Selecting Bash in Azure Cloud Shell correctly runs the az CLI command shown (`az vm create ...`).

### 99. Your company has several business units. Each business unit requires 20 different Azure resources for daily operation. All the business units require the same type of Azure resources. You need to recommend a solution to automate the creation of the Azure resources. What should you include in the recommendations?

- [ ] Azure Resource Manager templates.
- [ ] Virtual machine scale sets.
- [ ] The Azure API Management service.
- [ ] Management groups.

**Answer:** Azure Resource Manager templates.

**Explanation:** ARM templates standardize and automate deployment of identical resource sets across business units.

### 100. Which Azure service should you use to collect events from multiple resources into a centralized repository?

- [ ] Azure Event Hubs.
- [ ] Azure Analysis Services.
- [ ] Azure Monitor.
- [ ] Azure Stream Analytics.

**Answer:** Azure Event Hubs.

**Explanation:** Azure Event Hubs is a big-data streaming platform designed to ingest/collect millions of events into a central pipeline.

### 101. You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use the PowerApps portal. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** The PowerApps portal cannot be used to create Azure virtual machines.

### 102. You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use the Azure portal. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** The Azure Portal is browser-based and works fine from an Android tablet to create a VM.

### 103. Which Azure service provides a set of version control tools to manage code?

- [ ] Azure Repos.
- [ ] Azure DevTest Labs.
- [ ] Azure Storage.
- [ ] Azure Cosmos DB.

**Answer:** Azure Repos.

**Explanation:** Azure Repos provides Git/TFVC version control repositories for source code.

### 104. Your company plans to automate the deployment of servers to Azure. Your manager is concerned that you may expose administrative credentials during the deployment. You need to recommend an Azure solution that encrypts the administrative credentials during the deployment. What should you include in the recommendation?

- [ ] Azure Key Vault.
- [ ] Microsoft Purview Information Protection.
- [ ] Microsoft Defender for Cloud.
- [ ] Azure Multi-Factor Authentication (MFA).

**Answer:** Azure Key Vault.

**Explanation:** Azure Key Vault securely stores and encrypts secrets/credentials so they aren't exposed during automated deployments.

### 105. You plan to deploy several Azure virtual machines. You need to control the ports that devices on the Internet can use to access the virtual machines. What should you use?

- [ ] Network Security Group (NSG).
- [ ] Microsoft Entra ID role.
- [ ] Microsoft Entra ID group.
- [ ] Azure key vault.

**Answer:** Network Security Group (NSG).

**Explanation:** NSGs control which ports/protocols are allowed inbound/outbound to a VM's NIC or subnet.

### 106. Azure Germany can be used by legal residents of Germany only.

- [ ] No change is needed.
- [ ] Only enterprises that are registered in Germany.
- [ ] Only enterprises that purchase their azure licenses from a partner based in Germany.
- [ ] This service has been discontinued. Azure Germany was retired in 2021.

**Answer:** This service has been discontinued. Azure Germany was retired in 2021.

**Explanation:** Azure Germany was a data-residency-specific cloud that Microsoft retired in October 2021; it's no longer applicable.

### 107. Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution. You modify a Network Security Group (NSG). Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Modifying an NSG to allow inbound port 80 (HTTP) makes the VM reachable via HTTP from the internet.

### 108. Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure firewall. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Firewall rules can also be configured to allow HTTP traffic through to the VM.

### 109. Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify an Azure Traffic Manager profile. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Traffic Manager is DNS-based load balancing/routing, not a mechanism for opening network ports — it won't enable HTTP access by itself.

### 110. Which two types of customers are eligible to use Azure Government to develop a cloud solution?

- [ ] A Canadian government contractor.
- [ ] A European government contractor.
- [ ] A United States government entity.
- [ ] A United States government contractor.
- [ ] A European government entity.

**Answer:** A United States government entity.; A United States government contractor.

**Explanation:** Azure Government is only for US government entities and their contractors/partners.

### 111. You need to ensure that when Microsoft Entra ID users connect to Microsoft Entra ID from the Internet by using an anonymous IP address, the users are prompted automatically to change their password. Which Azure service should you use?

- [ ] Microsoft Entra Connect Health.
- [ ] Microsoft Entra Privileged Identity Management.
- [ ] Microsoft Defender for Identity.
- [ ] Microsoft Entra ID Protection.

**Answer:** Microsoft Entra ID Protection.

**Explanation:** Microsoft Entra ID Protection flags risky/anonymous sign-ins and can trigger an automatic forced password change.

### 112. Your company plans to deploy several web servers and several database servers to Azure. You need to recommend an Azure solution to limit the types of connections from the web servers to the database servers. What should you include in the recommendation?

- [ ] Network Security Groups (NSGs).
- [ ] Azure Service Bus.
- [ ] A local network gateway.
- [ ] A route filter.

**Answer:** Network Security Groups (NSGs).

**Explanation:** NSGs restrict traffic types/ports allowed between web-tier and database-tier VMs.

### 113. To what should an application connect to retrieve security tokens?

- [ ] An Azure Storage account.
- [ ] Microsoft Entra ID.
- [ ] A certificate store.
- [ ] An Azure key vault.

**Answer:** Microsoft Entra ID.

**Explanation:** Applications retrieve OAuth/OIDC security tokens from Microsoft Entra ID (the identity provider).

### 114. Which service provides network traffic filtering across multiple Azure subscriptions and virtual networks?

- [ ] Azure Firewall.
- [ ] An application security group.
- [ ] Azure DDoS protection.
- [ ] A Network Security Group (NSG).

**Answer:** Azure Firewall.

**Explanation:** Azure Firewall provides centralized traffic filtering that can span multiple subscriptions and VNets.

### 115. Which Azure service should you use to store certificates?

- [ ] Microsoft Defender for Cloud.
- [ ] An Azure Storage account.
- [ ] Azure Key Vault.
- [ ] Microsoft Purview Information Protection.

**Answer:** Azure Key Vault.

**Explanation:** Azure Key Vault is the service purpose-built to store and manage certificates (as well as secrets/keys).

### 116. You have a resource group named RG1. You plan to create virtual networks and app services in RG1. You need to prevent the creation of virtual machines only in RG1. What should you use?

- [ ] A lock.
- [ ] An Azure role.
- [ ] A tag.
- [ ] An Azure policy.

**Answer:** An Azure policy.

**Explanation:** Azure Policy can restrict specific resource types (like VMs) from being created in a resource group while allowing others.

### 117. What can Microsoft Purview Information Protection encrypt?

- [ ] Network traffic.
- [ ] Documents and email messages.
- [ ] An Azure Storage account.
- [ ] An Azure SQL database.

**Answer:** Documents and email messages.

**Explanation:** Microsoft Purview Information Protection (formerly Azure Information Protection) classifies/encrypts documents and emails.

### 118. From [Azure Monitor], you can view which user turned off a specific virtual machine during the last 14 days.

- [ ] No change is needed.
- [ ] Azure Event Hubs.
- [ ] Azure Activity Log.
- [ ] Azure Service Health.

**Answer:** Azure Activity Log.

**Explanation:** The Azure Activity Log (viewable via/integrated with Azure Monitor) records who performed actions like stopping a VM.

### 119. Your company has an Azure subscription that contains resources in several regions. A company policy states that administrators must only be allowed to create additional Azure resources in a region in the country where their office is located. You need to create the Azure resource that must be used to meet the policy requirement. What should you create?

- [ ] A read-only lock.
- [ ] An Azure policy.
- [ ] A management group.
- [ ] A reservation.

**Answer:** An Azure policy.

**Explanation:** Azure Policy can restrict resource creation to specific regions based on organizational rules.

### 120. From [Azure Cloud Shell], you can track your company regulatory standards and regulations, such as ISO 27001.

- [ ] No change is needed.
- [ ] The Microsoft Cloud Partner Portal.
- [ ] Compliance Manager.
- [ ] The Trust Center.

**Answer:** Compliance Manager.

**Explanation:** Compliance Manager (in the Microsoft Service Trust Portal) tracks regulatory compliance status like ISO 27001 — not Cloud Shell.

### 121. You need to configure an Azure solution that meets the following requirements: Secures websites from attacks. Generates reports that contain details of attempted attacks. What should you include in the solution?

- [ ] Azure Firewall.
- [ ] A Network Security Group (NSG).
- [ ] Microsoft Purview Information Protection.
- [ ] DDoS protection.

**Answer:** DDoS protection.

**Explanation:** Azure DDoS Protection (Standard) secures web apps from attacks and provides attack analytics/reports.

### 122. You attempt to create several managed Microsoft SQL Server instances in an Azure environment and receive a message that you must increase your Azure subscription limits. What should you do to increase the limits?

- [ ] Create a service health alert.
- [ ] Upgrade your support plan.
- [ ] Modify an Azure policy.
- [ ] Create a new support request.

**Answer:** Create a new support request.

**Explanation:** Subscription limit increases are requested by opening a new Azure support request (quota increase request).

### 123. Your company has 10 offices. You plan to generate several billing reports from the Azure portal. Each report will contain the Azure resource utilization of each office. Which Azure Resource Manager feature should you use before you generate the reports?

- [ ] Tags.
- [ ] Templates.
- [ ] Locks.
- [ ] Policies.

**Answer:** Tags.

**Explanation:** Tags let you categorize resources (e.g., by office) so cost/billing reports can be filtered per group.

### 124. Your company plans to migrate to Azure. The company has several departments. All the Azure resources used by each department will be managed by a department administrator. What are two possible techniques to segment Azure for the departments?

- [ ] Multiple subscriptions.
- [ ] Multiple Microsoft Entra ID directories.
- [ ] Multiple regions.
- [ ] Multiple resource groups.

**Answer:** Multiple subscriptions.; Multiple resource groups.

**Explanation:** Segmenting via multiple subscriptions or multiple resource groups both let department admins manage their own scoped resources.

### 125. In which Azure support plans can you open a new support request?

- [ ] Professional Direct only.
- [ ] Professional Direct, and Standard only.
- [ ] Professional Direct, Standard, and Developer only.
- [ ] Professional Direct, Standard, Developer, and Basic.

**Answer:** Professional Direct, Standard, Developer, and Basic.

**Explanation:** New support requests can be opened from Basic, Developer, Standard, and Professional Direct (and higher) plans — Basic is the entry tier that still allows this.

### 126. What is guaranteed in an Azure Service Level Agreement (SLA) for virtual machines?

- [ ] Uptime.
- [ ] Feature availability.
- [ ] Bandwidth.
- [ ] Performance.

**Answer:** Uptime.

**Explanation:** Azure VM SLAs guarantee a minimum uptime percentage, not performance/bandwidth/features.

### 127. Your company plans to purchase an Azure subscription. The company support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Basic support plan. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** The Basic plan does not include phone/email access to support engineers — that starts at Standard.

### 128. Your company plans to request an architectural review of an Azure environment from Microsoft. The company currently has a Basic support plan. You need to recommend a new support plan for the company. The solution must minimize costs. Which support plan should you recommend?

- [ ] Developer.
- [ ] Professional Direct.
- [ ] Standard.

**Answer:** Developer.

**Explanation:** The Developer support plan is the lowest-cost tier that includes architectural guidance/support beyond Basic.

### 129. What is required to use Azure Cost Management?

- [ ] A Dev/Test subscription.
- [ ] Software Assurance.
- [ ] An Enterprise Agreement (EA).
- [ ] A pay-as-you-go subscription.

**Answer:** A pay-as-you-go subscription.

**Explanation:** Azure Cost Management full functionality requires a pay-as-you-go (or certain enterprise) subscription type.

### 130. Your Azure trial account expired last week. You are now unable to [create additional Microsoft Entra ID user accounts].

- [ ] No change is needed.
- [ ] Start an existing Azure virtual machine.
- [ ] Access your data stored in Azure.
- [ ] Access the Azure portal.

**Answer:** Start an existing Azure virtual machine.

**Explanation:** An expired trial disables starting/running compute resources like VMs, though you can still access the portal and your data.

### 131. Your company plans to purchase an Azure subscription, The company support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Premier support plan. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** The Premier plan is enterprise-tier and focused on account management/architectural guidance, not specifically the cheapest phone/email option asked for here — Standard is the fit, so Premier alone as stated doesn't match the minimal requirement framing.

### 132. Your company has 10 departments. The company plans to implement Azure environment. You need to ensure that each department can use a different payment option for the Azure services it consumes. What should you create for each department?

- [ ] A reservation.
- [ ] A subscription.
- [ ] A resource group.
- [ ] A container instance.

**Answer:** A subscription.

**Explanation:** Each department needs its own subscription so it can have a separate billing/payment method.

### 133. Which statement accurately describes the Modern Lifecycle Policy for Azure services?

- [ ] Microsoft provides mainstream support for a service for five years.
- [ ] Microsoft provides a minimum of 12 months notice before ending support for a service.
- [ ] After a service is made generally available, Microsoft provides support for the service for a minimum of four years.
- [ ] When a service is retired, you can purchase extended support for the service for up to five years.

**Answer:** Microsoft provides a minimum of 12 months notice before ending support for a service.

**Explanation:** Under the Modern Lifecycle Policy, Microsoft commits to at least 12 months' notice before retiring a service with no successor.

### 134. You can use Advisor recommendations in Azure to send email alerts when the cost of the current billing Azure subscription exceeds a specified limit.

- [ ] No change is needed.
- [ ] Access control (LAM).
- [ ] Budget alerts.
- [ ] Compliance.

**Answer:** Budget alerts.

**Explanation:** Budget alerts (in Azure Cost Management) send emails when spending crosses a defined threshold — not Advisor.

### 135. To implement a hybrid cloud model, a company must first have a private cloud.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A hybrid cloud can be built by connecting on-premises infrastructure (not necessarily a full 'private cloud') to the public cloud.

### 136. A company can extend the computing resources of its internal network by using a hybrid cloud.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Hybrid cloud lets you burst/extend on-prem compute capacity into the public cloud when needed.

### 137. In a public cloud model, only guest users at your company can access the resources in the cloud.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Public cloud resources can be accessed by anyone (or any customer) provisioning them — not restricted to 'guest users' only.

### 138. You have an on-premises network that contains several servers. You plan to migrate all the servers to Azure. You need to recommend a solution to ensure that some of the servers are available if a single Azure data center goes offline for an extended period. What should you include in the recommendation?

- [ ] Fault tolerance.
- [ ] Elasticity.
- [ ] Scalability.
- [ ] Low latency.

**Answer:** Fault tolerance.

**Explanation:** Fault tolerance (e.g., via redundant VMs across Availability Zones) keeps services running through a datacenter outage.

### 139. An organization that hosts its infrastructure [in a private cloud] can close its data center.

- [ ] No change is needed.
- [ ] In a hybrid cloud.
- [ ] In the public cloud.
- [ ] On a Hyper-V host.

**Answer:** In the public cloud.

**Explanation:** Only public cloud migration lets an org fully close its own datacenter, since a private cloud still requires owned infrastructure.

### 140. What are two characteristics of the public cloud?

- [ ] Dedicated hardware.
- [ ] Unsecured connections.
- [ ] Limited storage.
- [ ] Metered pricing.
- [ ] Self-service management.

**Answer:** Metered pricing.; Self-service management.

**Explanation:** Public cloud is characterized by metered (pay-as-you-go) pricing and self-service provisioning/management.

### 141. Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that meets the company migration plan. Solution: You create an Azure App Service and Azure virtual machines that have Microsoft SQL Server installed. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Using VMs with SQL Server installed is IaaS, not PaaS, so it doesn't satisfy a PaaS-only migration plan.

### 142. Your company hosts an accounting application named App1 that is used by all the customers of the company. App1 has low usage during the first three weeks of each month and very high usage during the last week of each month. Which benefit of Azure Cloud Services supports cost management for this type of usage pattern?

- [ ] High availability.
- [ ] High latency.
- [ ] Elasticity.
- [ ] Load balancing.

**Answer:** Elasticity.

**Explanation:** Elasticity is the ability to automatically scale resources up/down matching variable usage patterns like monthly spikes.

### 143. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more scale sets. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Scale sets alone (without zone/region spread) don't guarantee survival of a single datacenter failure unless also spread across zones.

### 144. You plan to provision Infrastructure as a Service (IaaS) resources in Azure. Which resource is an example of IaaS?

- [ ] An Azure web app.
- [ ] An Azure virtual machine.
- [ ] An Azure logic app.
- [ ] An Azure SQL database.

**Answer:** An Azure virtual machine.

**Explanation:** An Azure VM is a raw compute resource — the textbook IaaS example.

### 145. A team of developers at your company plans to deploy, and then remove, 50 customized virtual machines each week. Thirty of the virtual machines run Windows Server 2016 and 20 of the virtual machines run Ubuntu Linux. You need to recommend which Azure service will minimize the administrative effort required to deploy and remove the virtual machines. What should you recommend?

- [ ] Azure Reserved Virtual Machines (VM) Instances.
- [ ] Azure virtual machine scale sets.
- [ ] Azure DevTest Labs.
- [ ] Microsoft Managed Desktop.

**Answer:** Azure DevTest Labs.

**Explanation:** Azure DevTest Labs supports quick, repeatable creation/teardown of VMs (Windows or Linux) for dev/test scenarios.

### 146. One of the benefits of Azure Synapse Analytics is that [high availability] is built into the platform.

- [ ] No change is needed.
- [ ] Automatic scaling.
- [ ] Data compression.
- [ ] Versioning.

**Answer:** No change is needed.

**Explanation:** Azure Synapse Analytics is a managed PaaS service with built-in high availability — statement is correct as given.

### 147. Match the Azure services to the correct descriptions.

- [ ] Provide operating system virtualization: Azure App Service. Provide portable environment for virtualized applications: Azure virtual machines. Used to build, deploy, and scale web apps: Azure Container Instances. Provide a platform for serverless code: Azure Functions.
- [ ] Provide operating system virtualization: Azure Functions. Provide portable environment for virtualized applications: Azure virtual machines. Used to build, deploy, and scale web apps: Azure Container Instances. Provide a platform for serverless code: Azure App Service.
- [ ] Provide operating system virtualization: Azure virtual machines. Provide portable environment for virtualized applications: Azure Container Instances. Used to build, deploy, and scale web apps: Azure App Service. Provide a platform for serverless code: Azure Functions.
- [ ] Provide operating system virtualization: Azure virtual machines. Provide portable environment for virtualized applications: Azure Functions. Used to build, deploy, and scale web apps: Azure App Service. Provide a platform for serverless code: Azure Container Instances.

**Answer:** Provide operating system virtualization: Azure virtual machines. Provide portable environment for virtualized applications: Azure Container Instances. Used to build, deploy, and scale web apps: Azure App Service. Provide a platform for serverless code: Azure Functions.

**Explanation:** VMs = OS virtualization, Container Instances = portable app environments, App Service = web app hosting/scaling, Functions = serverless code platform.

### 148. An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Solution: Run the script from a computer that runs macOS and has PowerShell Core 6.0 installed. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** macOS with PowerShell Core 6.0 installed can run the PowerShell script natively.

### 149. You have an Azure environment that contains 10 virtual networks and 100 virtual machines. You need to limit the amount of inbound traffic to all the Azure virtual networks. What should you create?

- [ ] One application security group (ASG).
- [ ] 10 virtual network gateways.
- [ ] 10 Azure ExpressRoute circuits.
- [ ] One Azure firewall.

**Answer:** One Azure firewall.

**Explanation:** A single centrally managed Azure Firewall can limit inbound traffic across many VNets/VMs at once.

### 150. You have an on-premises application that sends email notifications automatically based on a rule. You plan to migrate the application to Azure. You need to recommend a serverless computing solution for the application. What should you include in the recommendation?

- [ ] A web app.
- [ ] A server image in Azure Marketplace.
- [ ] A logic app.
- [ ] An API app.

**Answer:** A logic app.

**Explanation:** Azure Logic Apps is the serverless workflow service for rule-based automated actions like sending emails.

### 151. You have an application that is comprised of an Azure web app that has a Service Level Agreement (SLA) of 99.95 percent and an Azure SQL database that has an SLA of 99.99 percent. The composite SLA for the application is [the product of both SLAs, which equals 99.94 percent].

- [ ] No change is needed.
- [ ] The lowest SLA associated to the application, which is 99.95 percent.
- [ ] The highest SLA associated to the application, which is 99.99 percent.
- [ ] The difference between the two SLAs, which is 0.05 percent.

**Answer:** No change is needed.

**Explanation:** Composite SLA is the product of each component's SLA (0.9995 × 0.9999 ≈ 99.94%) — statement given is correct.

### 152. You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. `az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys`. You need to create VM1 in Subscription1 by using the command. Solution: From a computer that runs Windows 10, install Azure CLI. From PowerShell, sign in to Azure and then run the command. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Installing Azure CLI on Windows and running the `az vm create` command from PowerShell works, since CLI commands run fine inside PowerShell.

### 153. You have an Azure subscription named Subscription1. You sign in to the Azure portal and create a resource group named RG1. From Azure documentation, you have the following command that creates a virtual machine named VM1. `az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys`. You need to create VM1 in Subscription1 by using the command. Solution: From a computer that runs Windows 10, install Azure CLI. From a command prompt, sign in to Azure and then run the command. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure CLI also runs fine from a plain Windows command prompt after installation.

### 154. You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. Solution: You use PowerShell in Azure Cloud Shell. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** PowerShell in Azure Cloud Shell (browser-based) works from any device including an Android tablet.

### 155. [Azure Databricks] is an Apache Spark-based analytics service.

- [ ] No change is needed.
- [ ] Azure Data Factory.
- [ ] Azure DevOps.
- [ ] Azure HDInsight.

**Answer:** No change is needed.

**Explanation:** Azure Databricks is indeed an Apache Spark-based big data analytics platform — correct as stated.

### 156. Azure Site Recovery provides [fault tolerance] for virtual machines.

- [ ] No change is needed.
- [ ] Disaster recovery.
- [ ] Elasticity.
- [ ] High availability.

**Answer:** Disaster recovery.

**Explanation:** Azure Site Recovery is specifically a disaster recovery (replication/failover) service, not just generic fault tolerance.

### 157. An Availability Zone in Azure has physically separate locations [across two continents].

- [ ] No change is needed.
- [ ] Within a single Azure region.
- [ ] Within multiple Azure regions.
- [ ] Within a single Azure datacenter.

**Answer:** Within a single Azure region.

**Explanation:** Availability Zones are physically separate locations within a single Azure region, not spanning continents.

### 158. Your company plans to migrate all on-premises data to Azure. You need to identify whether Azure complies with the company regional requirements. What should you use?

- [ ] The Knowledge Center.
- [ ] Azure Marketplace.
- [ ] The MyApps portal.
- [ ] The Trust Center.

**Answer:** The Trust Center.

**Explanation:** The Microsoft Trust Center provides compliance/regional data residency information to evaluate regulatory fit.

### 159. Azure Key Vault is used to store secrets for [Microsoft Entra ID user accounts].

- [ ] No change is needed.
- [ ] Microsoft Entra ID administrative accounts.
- [ ] Personally Identifiable Information (PII).
- [ ] Server applications.

**Answer:** Server applications.

**Explanation:** Azure Key Vault stores secrets typically used by applications/services (e.g., connection strings, API keys), not personal Entra ID user account credentials.

### 160. After you create a virtual machine, you need to modify the [Network Security Group (NSG)] to allow connections to TCP port 8080 on the virtual machine.

- [ ] No change is needed.
- [ ] Virtual network gateway.
- [ ] Virtual network.
- [ ] Route table.

**Answer:** No change is needed.

**Explanation:** Modifying the NSG to allow TCP port 8080 is indeed the correct action — statement is already correct.

### 161. Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a Network Security Group (NSG). Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Allowing HTTP in the NSG makes VM1 reachable via HTTP from the internet.

### 162. Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. Solution: You modify a DDoS protection plan. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A DDoS protection plan defends against attacks; it does not open network ports needed for HTTP access.

### 163. [Resource groups] provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions.

- [ ] No change is needed.
- [ ] Management groups.
- [ ] Azure policies.
- [ ] Azure App Service plans.

**Answer:** Azure policies.

**Explanation:** Azure Policy (not resource groups) is the mechanism for managing compliance across multiple subscriptions (often paired with management groups).

### 164. Your network contains an Active Directory forest. The forest contains 5,000 user accounts. Your company plans to migrate all network resources to Azure and to decommission the on-premises data center. You need to recommend a solution to minimize the impact on users after the planned migration. What should you recommend?

- [ ] Implement Azure Multi-Factor Authentication (MFA).
- [ ] Sync all the Active Directory user accounts to Microsoft Entra ID.
- [ ] Instruct all users to change their password.
- [ ] Create a guest user account in Microsoft Entra ID for each user.

**Answer:** Sync all the Active Directory user accounts to Microsoft Entra ID.

**Explanation:** Syncing on-prem AD accounts to Microsoft Entra ID (via Entra Connect) preserves identities/passwords, minimizing user impact after migration.

### 165. What should you use to evaluate whether your company Azure environment meets regulatory requirements?

- [ ] The Knowledge Center website.
- [ ] The Advisor blade from the Azure portal.
- [ ] Compliance Manager from the Service Trust Portal.
- [ ] The Security Center blade from the Azure portal.

**Answer:** Compliance Manager from the Service Trust Portal.

**Explanation:** Compliance Manager, found in the Microsoft Service Trust Portal, evaluates and scores regulatory compliance.

### 166. The [Microsoft Online Services Privacy Statement] explains what data Microsoft processes, how Microsoft processes the data, and the purpose of processing the data.

- [ ] No change is needed.
- [ ] Microsoft Online Services Terms.
- [ ] Microsoft Online Service Level Agreement.
- [ ] Online Subscription Agreement for Microsoft Azure.

**Answer:** No change is needed.

**Explanation:** The Microsoft Online Services Privacy Statement is indeed the document describing what data Microsoft processes and why — correct as given.

### 167. If Microsoft plans to end support for an Azure service that does NOT have a successor service, Microsoft will provide notification at least [12 months] before.

- [ ] No change is needed.
- [ ] 6 months.
- [ ] 90 days.
- [ ] 30 days.

**Answer:** No change is needed.

**Explanation:** Microsoft's Modern Lifecycle Policy requires at least 12 months' notice for retiring services without a successor — correct as given.

### 168. Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Microsoft Entra ID. Five groups in Microsoft Entra ID. 10 public IP addresses. 10 network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused network interfaces. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Network interfaces themselves are typically free (no charge for an unattached NIC in most cases) — removing them doesn't meaningfully cut cost here.

### 169. Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Microsoft Entra ID. Five groups in Microsoft Entra ID. 10 public IP addresses 10. network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused public IP addresses. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Public IP addresses are billed resources, so removing unused ones directly reduces cost.

### 170. Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Microsoft Entra ID. Five groups in Microsoft Entra ID. 10 public IP addresses 10. network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused user accounts. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Entra ID user accounts don't generate direct Azure infrastructure costs by existing, so removing them won't reduce Azure costs here.

### 171. A support plan solution that gives you best practice information, health status and notifications, and 24/7 access to billing information at the lowest possible cost is a [Standard] support plan.

- [ ] No change is needed.
- [ ] Developer.
- [ ] Basic.
- [ ] Professional Direct.

**Answer:** Basic.

**Explanation:** The Basic support plan provides best-practice guidance, health/notifications, and billing support at the lowest tier above Free.

### 172. You can create an Azure support request from [support.microsoft.com].

- [ ] No change is needed.
- [ ] The Azure portal.
- [ ] The Knowledge Center.
- [ ] The Security & Compliance admin center.

**Answer:** The Azure portal.

**Explanation:** You can open Azure support requests directly from the Azure Portal (Help + Support blade), not just support.microsoft.com.

### 173. Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Microsoft Entra ID. Five groups in Microsoft Entra ID. 10 public IP addresses. 10 network interfaces. You need to reduce the Azure costs for the company. Solution: You remove the unused groups. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Entra ID groups don't carry direct Azure infra costs, so removing unused groups won't reduce billed cost.

### 174. The Azure [Standard] support plan is the lowest cost option to receive 24×7 access to support engineers by phone.

- [ ] No change is needed.
- [ ] Developer.
- [ ] Basic.
- [ ] Professional Direct.

**Answer:** No change is needed.

**Explanation:** The Standard support plan is the lowest tier that includes 24/7 phone access to support engineers — correct as given.

### 175. All Azure services that are in public preview are [provided without any documentation].

- [ ] No change is needed.
- [ ] Only configurable from Azure CLI.
- [ ] Excluded from the Service Level Agreements.
- [ ] Only configurable from the Azure portal.

**Answer:** Excluded from the Service Level Agreements.

**Explanation:** Public preview services are excluded from SLA guarantees (not lacking documentation) — that's the accurate caveat.

### 176. An Azure service is available to all Azure customers when it is in [public preview].

- [ ] No change is needed.
- [ ] Private preview.
- [ ] Development.
- [ ] An Enterprise Agreement (EA) subscription.

**Answer:** No change is needed.

**Explanation:** Public preview services are indeed available for all customers to try — statement is correct as given.

### 177. Your company has an on-premises network with numerous servers, which they intend to migrate to Azure. You have been tasked with devising a plan that allows for the availability of a few of the servers, in the event that one of the Azure data centers becomes unavailable for a lengthy interval. Solution: You should include elasticity in your plan. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Elasticity refers to scaling resource capacity up/down with demand, not availability during an outage — doesn't meet the fault-tolerance goal.

### 178. Your company has an on-premises network with numerous servers, which they intend to migrate to Azure. You have been tasked with devising a plan that allows for the availability of a few of the servers, in the event that one of the Azure data centers becomes unavailable for a lengthy interval. Solution: You should include scalability in your plan. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Scalability is about handling increased load, not surviving a datacenter outage — doesn't meet the goal.

### 179. Your company has an on-premises network with numerous servers, which they intend to migrate to Azure. You have been tasked with devising a plan that allows for the availability of a few of the servers, in the event that one of the Azure data centers becomes unavailable for a lengthy interval. Solution: You should include fault tolerance in your plan. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Fault tolerance is exactly the design concept for keeping some servers available if a datacenter goes down — meets the goal.

### 180. You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Software as a Service (SaaS). Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** SaaS is fully managed software you consume, not something used to deploy custom VMs — doesn't meet the goal.

### 181. You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Platform as a Service (PaaS). Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** PaaS abstracts away VM management entirely, so it's not the right model to directly deploy VMs — doesn't meet the goal.

### 182. You are tasked with deploying Azure virtual machines for your company. You need to make use of the appropriate cloud deployment solution. Solution: You should make use of Infrastructure as a Service (IaaS). Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** IaaS is exactly the model for provisioning and managing virtual machines — meets the goal.

### 183. Your company has on-premises network includes a large number of servers. They would like to make extra resources available to their users, while keeping capital and operational overheads to a minimum. You are required to make recommendations that should be included in the overall solution. Solution: You should indorse the use of an added data center as part of the solution. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Adding another physical data center increases (not minimizes) capital expenditure — doesn't meet the goal.

### 184. Your company has on-premises network includes a large number of servers. They would like to make extra resources available to their users, while keeping capital and operational overheads to a minimum. You are required to make recommendations that should be included in the overall solution. Solution: You should indorse the use of a hybrid cloud as part of the solution. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** A hybrid cloud extends existing on-prem resources into the cloud, balancing CapEx/OpEx as required — meets the goal.

### 185. Your company has on-premises network includes a large number of servers. They would like to make extra resources available to their users, while keeping capital and operational overheads to a minimum. You are required to make recommendations that should be included in the overall solution. Solution: You should indorse the use of a private cloud as part of the solution. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Building a private cloud still requires significant capital investment in owned hardware — doesn't minimize costs, so it doesn't meet the goal.

### 186. Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the elastic expenditure model. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** There is no 'elastic expenditure model' in Azure billing terminology as a standard category here — doesn't meet the goal.

### 187. Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the scalable expenditure model. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** 'Scalable expenditure model' isn't a recognized Azure billing/expenditure category — doesn't meet the goal.

### 188. Your company is planning to migrate all their virtual machines to an Azure pay-as-you-go subscription. The virtual machines are currently hosted on the Hyper-V hosts in a data center. You are required make sure that the intended Azure solution uses the correct expenditure model. Solution: You should recommend the use of the operational expenditure model. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Pay-as-you-go Azure billing is Operational Expenditure (OpEx) — correctly meets the goal.

### 189. You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Cosmos DB. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Cosmos DB is a database service, not a predictive-analytics build/test/deploy tool — doesn't meet the goal.

### 190. You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Logic Apps. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Logic Apps is a workflow automation tool, not a predictive-analytics ML platform — doesn't meet the goal.

### 191. You are required to deploy an Artificial Intelligence (AI) solution in Azure. You want to make sure that you are able to build, test, and deploy predictive analytics for the solution. Solution: You should make use of Azure Machine Learning Studio. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Machine Learning Studio is purpose-built to build, test, and deploy predictive analytics models — meets the goal.

### 192. Your company has infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that the Azure API Management service be included in the strategy. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure API Management manages/exposes APIs; it doesn't automate resource creation across business units — doesn't meet the goal.

### 193. Your company has infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that management groups be included in the strategy. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Management groups organize subscriptions for governance but don't themselves automate resource deployment — doesn't meet the goal.

### 194. Your company has infrastructure includes a number of business units that each need a large number of various Azure resources for everyday operation. The resources required by each business unit are identical. You are required to sanction a strategy to create Azure resources automatically. Solution: You recommend that the Azure Resource Manager templates be included in the strategy. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** ARM templates are exactly the tool for repeatable, automated deployment of identical resource sets — meets the goal.

### 195. You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include two virtual machines and one availability zone in your strategy. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Two VMs but only one Availability Zone doesn't reach the 99.99% SLA threshold — doesn't meet the goal.

### 196. You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include one virtual machine and two availability zones in your strategy. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** One VM (even across two zones) doesn't meet the multi-VM requirement for 99.99% SLA — doesn't meet the goal.

### 197. You are tasked with deploying a critical LOB application, which will be installed on a virtual machine, to Azure. You are informed that the application deployment strategy should allow for a guaranteed availability of 99.99 percent. You need to make sure that the strategy requires as little virtual machines and availability zones as possible. Solution: You include two virtual machines and two availability zones in your strategy. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Two VMs across two Availability Zones is the minimum combination that achieves a 99.99% SLA — meets the goal.

### 198. Your company has developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: you recommend the use of Microsoft Managed Desktop. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Microsoft Managed Desktop is for managed end-user devices, not rapid VM provisioning/deprovisioning — doesn't meet the goal.

### 199. Your company has developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: you recommend the use of Azure Reserved Virtual Machines (VM) Instances.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Reserved VM Instances are a cost-saving billing commitment, not a rapid deploy/teardown automation tool — doesn't meet the goal.

### 200. Your company has developers intend to deploy a large number of custom virtual machines on a weekly basis. They will also be removing these virtual machines during the same week it was deployed. Sixty percent of the virtual machines have Windows Server 2016 installed, while the other forty percent has Ubuntu Linux installed. You are required to make sure that the administrative effort, needed for this process, is reduced by employing a suitable Azure service. Solution: you recommend the use of Azure DevTest Labs. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure DevTest Labs is designed exactly for fast, repeatable creation/removal of custom (mixed-OS) VMs — meets the goal.

### 201. Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1. The company has users that work remotely. The remote workers require access to the VMs on VNet1. You need to provide access for the remote workers. What should you do?

- [ ] Configure a Site-to-Site (S2S) VPN.
- [ ] Configure a VNet-toVNet VPN.
- [ ] Configure a Point-to-Site (P2S) VPN.
- [ ] Configure DirectAccess on a Windows Server 2012 server VM.
- [ ] Configure a Multi-Site VPN.

**Answer:** Configure a Point-to-Site (P2S) VPN.

**Explanation:** A Point-to-Site (P2S) VPN lets individual remote client machines connect directly into the Azure VNet, ideal for remote workers.

### 202. You have been informed by your superiors of the company has intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Microsoft Purview Information Protection. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Microsoft Purview Information Protection classifies/encrypts documents, not deployment credentials — doesn't meet the goal.

### 203. You have been informed by your superiors of the company has intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Azure Key Vault. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Key Vault is designed to securely store and encrypt secrets like deployment credentials — meets the goal.

### 204. You have been informed by your superiors of the company has intentions to automate server deployment to Azure. There is, however, some concern that administrative credentials could be uncovered during this process. You are required to make sure that during the deployment, the administrative credentials are encrypted using a suitable Azure solution. Solution: You recommend the use of Azure Multi-Factor Authentication (MFA). Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** MFA adds a sign-in verification step; it doesn't encrypt credentials during automated deployment — doesn't meet the goal.

### 205. Your company has a Microsoft Entra ID environment. Users occasionally connect to Microsoft Entra ID via the Internet. You have been tasked with making sure that users who connect to Microsoft Entra ID via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Azure Key Vault. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Key Vault stores secrets; it doesn't monitor sign-ins or force password changes — doesn't meet the goal.

### 206. Your company has a Microsoft Entra ID environment. Users occasionally connect to Microsoft Entra ID via the Internet. You have been tasked with making sure that users who connect to Microsoft Entra ID via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Microsoft Entra ID Protection. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft Entra ID Protection detects risky/anonymous sign-ins and can prompt automatic password changes — meets the goal.

### 207. Your company has a Microsoft Entra ID environment. Users occasionally connect to Microsoft Entra ID via the Internet. You have been tasked with making sure that users who connect to Microsoft Entra ID via the internet from an unidentified IP address, are automatically encouraged to change passwords. Solution: You configure the use of Microsoft Entra Privileged Identity Management. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Privileged Identity Management manages just-in-time role elevation, not anonymous sign-in password enforcement — doesn't meet the goal.

### 208. You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include the Azure Service Bus in your strategy. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Service Bus is a messaging service, not a network traffic control mechanism between server tiers — doesn't meet the goal.

### 209. You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include network security groups (NSGs) in your strategy. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** NSGs directly control allowed connection types between web and database server tiers — meets the goal.

### 210. You are planning a strategy to deploy numerous web servers and database servers to Azure. This strategy should allow for connection types between the web servers and database servers to be controlled. Solution: You include a local network gateway in your strategy. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A local network gateway represents an on-prem VPN device; it doesn't control inter-server traffic types within Azure — doesn't meet the goal.

### 211. Your company has Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to require Azure Multi-Factor Authentication (MFA). Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** MFA improves security but doesn't in itself minimize user impact/disruption from the migration — doesn't meet the goal.

### 212. Your company has Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to sync all the Active Directory user accounts to Microsoft Entra ID. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Syncing existing AD accounts to Entra ID preserves usernames/passwords, minimizing disruption — meets the goal.

### 213. Your company has Active Directory forest includes thousands of user accounts. You have been informed that all network resources will be migrated to Azure. Thereafter, the on-premises data center will be retired. You are required to employ a strategy that reduces the effect on users, once the planned migration has been completed. Solution: You plan to enforce password change. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Forcing a password change adds user disruption rather than minimizing it — doesn't meet the goal.

### 214. Your developers have created 10 web applications that must be host on Azure. You need to determine which Azure web tier plan to host the web apps. The web tier plan must meet the following requirements: The web apps will use custom domains. The web apps each require 10 GB of storage. The web apps must each run in dedicated compute instances. Load balancing between instances must be included. Costs must be minimized. Which web tier plan should you use?

- [ ] Standard.
- [ ] Basic.
- [ ] Free.
- [ ] Shared.

**Answer:** Basic.

**Explanation:** The Basic web tier plan supports custom domains, dedicated compute, and load balancing at the lowest qualifying cost, satisfying storage/requirements.

### 215. You are currently trying to generate a number of managed Microsoft SQL Server instances in an Azure environment. During the process, you are presented with a notification informing you that the Azure subscription limits must be increased. You want to make sure that you can complete your task. Solution: You generate a service health alert. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A service health alert notifies about outages, not quota limits — doesn't help increase subscription limits.

### 216. You are currently trying to generate a number of managed Microsoft SQL Server instances in an Azure environment. During the process, you are presented with a notification informing you that the Azure subscription limits must be increased. You want to make sure that you can complete your task. Solution: You alter an Azure policy. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Modifying an Azure Policy doesn't raise subscription resource quotas — doesn't meet the goal.

### 217. You are currently trying to generate a number of managed Microsoft SQL Server instances in an Azure environment. During the process, you are presented with a notification informing you that the Azure subscription limits must be increased. You want to make sure that you can complete your task. Solution: You generate a new support request. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Filing a new support request is the correct path to request a subscription limit increase — meets the goal.

### 218. You are planning to migrate a company to Azure. Each of the company has numerous divisions will have an administrator in place to manage the Azure resources used by their respective division. You want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum. Solution: You plan to make use of several Microsoft Entra ID directories. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Separate Entra ID directories add complexity and aren't needed just to segment by division — doesn't minimize admin effort, doesn't meet the goal.

### 219. You are planning to migrate a company to Azure. Each of the company has numerous divisions will have an administrator in place to manage the Azure resources used by their respective division. You want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum. Solution: You plan to make use of several resource groups. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Multiple resource groups alone (without separate billing) don't let each division manage cost/billing autonomy - doesn't fully meet the goal as intended here.

### 220. You are planning to migrate a company to Azure. Each of the company has numerous divisions will have an administrator in place to manage the Azure resources used by their respective division. You want to make sure that the Azure deployment you employ allows for Azure to be segmented for the divisions, while keeping administrative effort to a minimum. Solution: You plan to make use of several subscriptions. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Multiple subscriptions let each division's admin manage resources within their own boundary with minimal shared admin overhead — meets the goal.

### 221. Your developers have created a portal web app for users in the Miami branch office. The web app will be publicly accessible and used by the Miami users to retrieve customer and product information. The web app is currently running in an on-premises test environment. You plan to host the web app on Azure. You need to determine which Azure web tier plan to host the web app. The web tier plan must meet the following requirements: The website will use the miami.weyland.com URL. The website will be deployed to two instances. SSL support must be included. The website requires 12 GB of storage. Costs must be minimized. Which web tier plan should you use?

- [ ] Standard.
- [ ] Basic.
- [ ] Free.
- [ ] Shared.

**Answer:** Standard.

**Explanation:** The Standard web tier plan supports custom domains, multiple instances, and SSL — the right minimal-cost fit for these requirements.

### 222. Your company has datacenters in Los Angeles and New York. The company has a Microsoft Azure subscription. You are configuring the two datacenters as geo-clustered sites for site resiliency. You need to recommend an Azure storage redundancy option. You have the following data storage requirements: Data must be stored on multiple nodes. Data must be stored on nodes in separate geographic locations. Data can be read from the secondary location as well as from the primary location Which of the following Azure stored redundancy options should you recommend?

- [ ] Geo-redundant storage.
- [ ] Read-only geo-redundant storage.
- [ ] Zone-redundant storage.
- [ ] Locally redundant storage.

**Answer:** Read-only geo-redundant storage.

**Explanation:** Read-access geo-redundant storage (RA-GRS) replicates data to a secondary region and allows reads from that secondary location too.

### 223. Your company has Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment has design from Microsoft. This is, however, not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum. Solution: You recommend that the company subscribes to the Standard support plan. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** The Standard support plan does not include architecture design review/assessment services — doesn't meet the goal.

### 224. Your company has Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment has design from Microsoft. This is, however, not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum. Solution: You recommend that the company subscribes to the Professional Direct support plan. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Even Professional Direct doesn't include formal architecture design review — Premier is required for that, so this doesn't meet the goal as minimal-cost.

### 225. Your company has Azure subscription includes a Basic support plan. They would like to request an assessment of an Azure environment has design from Microsoft. This is, however, not supported by the existing plan. You want to make sure that the company subscribes to a support plan that allows this functionality, while keeping expenses to a minimum. Solution: You recommend that the company subscribes to the Premier support plan. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Premier does offer architecture reviews but isn't the minimal-cost solution being sought in this specific scenario framing — marked No.

### 226. A company that has numerous divisions is planning to deploy an Azure environment. The company would like each division has option to pay for the Azure services it utilizes, not be the same. You have been asked to recommend a solution to meet the requirements. Solution: You recommend that an Azure role be created for each division. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** An Azure role controls permissions, not billing separation — doesn't meet the goal.

### 227. A company that has numerous divisions is planning to deploy an Azure environment. The company would like each division has option to pay for the Azure services it utilizes, not be the same. You have been asked to recommend a solution to meet the requirements. Solution: You recommend that an Azure policy be created for each division. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** An Azure policy enforces compliance rules, not billing separation — doesn't meet the goal.

### 228. A company that has numerous divisions is planning to deploy an Azure environment. The company would like each division has option to pay for the Azure services it utilizes, not be the same. You have been asked to recommend a solution to meet the requirements. Solution: You recommend that a subscription be created for each division. Does the solution meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** A separate subscription per division allows independent billing/payment methods — meets the goal.

### 229. An Azure subscription can be associated to multiple Microsoft Entra ID tenants.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** An Azure subscription is associated with exactly one Microsoft Entra ID tenant at a time.

### 230. You can change the Microsoft Entra ID tenant to which an Azure subscription is associated.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** You can move a subscription to a different Entra ID tenant (with some limitations) via the Portal.

### 231. When an Azure subscription expires, the associated Microsoft Entra ID tenant is deleted automatically.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** The Entra ID tenant is a separate object and isn't automatically deleted just because a subscription expires.

### 232. A single Microsoft account can be used to manage multiple Azure subscriptions.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** One Microsoft account (or Entra ID identity) can be a user/admin on many Azure subscriptions.

### 233. Two Azure subscriptions can be merged into a single subscription.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure does not support merging two subscriptions into one; resources must be moved individually.

### 234. A company can use resources from multiple subscriptions.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Resources across multiple subscriptions can be used together (e.g., via cross-subscription networking/RBAC).

### 235. Availability zones can be implemented in all Azure regions.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Not every Azure region has Availability Zones — only select regions support them.

### 236. Only virtual machines that run Windows Server can be created in availability zones.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Availability Zones support VMs of any supported OS, not just Windows Server.

### 237. Availability zones are used to replicate data and applications to multiple regions.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Availability Zones protect against datacenter failure within a single region — geo-replication across regions is a separate feature (e.g., GRS storage).

### 238. You plan to create an Azure virtual machine. You need to identify which storage service must be used to store the unmanaged data disks of the virtual machine. What should you identify?

- [ ] Containers.
- [ ] File shares.
- [ ] Tables.
- [ ] Queues.

**Answer:** Containers.

**Explanation:** Unmanaged disks are stored as page blobs inside Blob storage containers.

### 239. You plan to implement an Azure database solution. You need to implement a database solution that meets the following requirements: Can add data concurrently from multiple regions. Can store JSON documents Which database service should you deploy?

- [ ] Azure Cosmos DB.
- [ ] SQL databases.
- [ ] Azure Database for MYSQL servers.
- [ ] Azure Database for PostgreSQL servers.
- [ ] Azure Database for NariaDB servers.
- [ ] SQL servers.
- [ ] SQL Data warehouses.
- [ ] Azure Database Migration Services.
- [ ] Azure Cache for Redis.
- [ ] SQL Server stretch databases.
- [ ] Data factories.
- [ ] SQL elastic pools.
- [ ] Virtual Clusters.
- [ ] Managed databases.
- [ ] Elastic Job agents.
- [ ] SQL managed instances.

**Answer:** Azure Cosmos DB.

**Explanation:** Azure Cosmos DB supports multi-region writes and native JSON document storage.

### 240. All the Azure resources deployed to a resource group must use the same Azure region.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Resources within one resource group can span multiple Azure regions; the resource group itself just records a metadata location.

### 241. If you assign a tag to a resource group, all the Azure resources in that resource group are assigned to the same tag.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Tags on a resource group are not automatically inherited by the resources inside it.

### 242. If you assign permissions for a user to manage a resource group, the user can manage all the Azure resources in that resource group.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** RBAC permissions granted at the resource group scope apply to all resources contained within it.

### 243. You plan to deploy a critical line-of-business application to Azure. The application will run on an Azure virtual machine. You need to recommend a deployment solution for the application. The solution must provide a guaranteed availability of 99.99 percent. What is the minimum number of virtual machines and the minimum number of availability zones you should recommend for the deployment? Minimum number of virtual machines:

- [ ] 1.
- [ ] 2.
- [ ] 3.

**Answer:** 2.

**Explanation:** A 99.99% SLA requires a minimum of 2 VMs.

### 244. You plan to deploy a critical line-of-business application to Azure. The application will run on an Azure virtual machine. You need to recommend a deployment solution for the application. The solution must provide a guaranteed availability of 99.99 percent. What is the minimum number of virtual machines and the minimum number of availability zones you should recommend for the deployment? Minimum number of availability zones:

- [ ] 1.
- [ ] 2.
- [ ] 3.

**Answer:** 2.

**Explanation:** A 99.99% SLA requires those 2 VMs to be spread across a minimum of 2 Availability Zones.

### 245. Data that is stored in an Azure Storage account automatically has at least three copies.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Storage (LRS at minimum) automatically maintains at least three synchronous copies of your data within a datacenter.

### 246. All data that is copied to an Azure Storage account is backed up automatically to another Azure data center.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Data is only replicated to another datacenter/region if you choose a redundancy option like GRS — it isn't automatic for all accounts.

### 247. An Azure Storage account can contain up to 2 TB of data and up to one million files.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Storage accounts can scale far beyond 2 TB/1 million files (limits are in the petabyte/billions-of-objects range).

### 248. If you have Azure resources deployed to every region, you can implement availability zones in all the regions.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Availability Zones are only available in specific supported regions, not all regions, regardless of where resources are deployed.

### 249. North America is represented by a single Azure region.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** North America has multiple Azure regions (East US, West US, Central US, Canada regions, etc.), not just one.

### 250. Every Azure region has multiple datacenters.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Each Azure region contains one or more physically separate datacenters — Microsoft's design guarantees multiple facilities per region in most cases.

### 251. Data transfers between Azure services located in different Azure regions are always free.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Cross-region data transfer (egress) typically incurs bandwidth charges, not free by default.

### 252. You need to be notified when Microsoft plans to perform maintenance that can affect the resources deployed to an Azure subscription. What should you use?

- [ ] Azure Monitor.
- [ ] Azure Service Health.
- [ ] Azure Advisor.
- [ ] Microsoft Trust Center.

**Answer:** Azure Service Health.

**Explanation:** Azure Service Health notifies subscribers about planned maintenance and service issues affecting their resources.

### 253. A Windows Virtual Desktop session host can run Windows 10 only.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Windows Virtual Desktop session hosts can run other supported OS versions (e.g., Windows Server), not just Windows 10.

### 254. A Windows Virtual Desktop host pool that includes 20 session hosts supports a maximum of 20 simultaneous user connections.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A host pool's max simultaneous connections depends on VM sizing/session limits per host, not simply 1-per-host — so 20 hosts doesn't cap at exactly 20 users.

### 255. Windows Virtual Desktop supports desktop and app virtualization.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Windows Virtual Desktop supports both full desktop virtualization and individual app (RemoteApp) virtualization.

### 256. [...] can calculate cost savings due to reduced electricity consumption as a result of migrating on-premises Microsoft SQL servers to Azure.

- [ ] The Azure Migrate: Server Assessment tool.
- [ ] The Azure Total Cost of Ownership (TCO) calculator.
- [ ] The Database Migration Assistant.
- [ ] The pricing calculator in Azure.

**Answer:** The Azure Total Cost of Ownership (TCO) calculator.

**Explanation:** The Azure TCO Calculator estimates savings (including operational costs like electricity) from moving on-prem workloads to Azure.

### 257. You can use Availability Zones in Azure to protect Azure virtual machines from a datacenter failure.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Availability Zones specifically protect against a single datacenter (zone) failure within a region.

### 258. You can use Availability Zones in Azure to protect Azure virtual machines from a region failure.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Availability Zones do not protect against an entire region going down — that requires multi-region deployment.

### 259. You can use Availability Zones in Azure to protect Azure managed disks from a datacenter failure.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Managed disks can also be zone-redundant, protecting against a datacenter-level failure.

### 260. An Azure subscription can have multiple account administrators.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** An Azure subscription has a single Account Administrator (though it can have multiple co-admins/owners via RBAC).

### 261. An Azure subscription can be managed by using a Microsoft account only.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Historically an Azure subscription requires a Microsoft account (or an Entra ID work/school account) to be managed — correct per source answer.

### 262. An Azure resource group can contain multiple Azure subscriptions.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** It's the reverse: a subscription can contain many resource groups, not a resource group containing subscriptions.

### 263. To use Microsoft Entra ID credentials to sign in to a computer that runs Windows 10, the computer must be joined to Microsoft Entra ID.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Signing in with Entra ID credentials on Windows 10 requires the device to be Microsoft Entra joined (or hybrid joined).

### 264. Users in Microsoft Entra ID are organized by using resource groups.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Users in Microsoft Entra ID are organized using groups, not resource groups (which are an Azure Resource Manager concept).

### 265. Microsoft Entra ID groups support dynamic membership rules.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft Entra ID (Azure AD) supports dynamic group membership based on user/device attribute rules.

### 266. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines remain available if a single data center fails. What are two possible solutions?

- [ ] Deploy the virtual machines to two or more availability zones.
- [ ] Deploy the virtual machines to two or more resource groups.
- [ ] Deploy the virtual machines to a scale set.
- [ ] Deploy the virtual machines to two or more regions.

**Answer:** Deploy the virtual machines to two or more availability zones.; Deploy the virtual machines to two or more regions.

**Explanation:** Spreading VMs across multiple Availability Zones or multiple regions both protect against a single datacenter failure.

### 267. Azure Monitor can monitor the performance of on-premises computers.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Monitor can ingest performance data from on-premises machines via agents (e.g., Log Analytics agent).

### 268. Azure Monitor can send alerts to Microsoft Entra ID security groups.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Monitor alert action groups can notify Microsoft Entra ID (Azure AD) security groups.

### 269. Azure Monitor can trigger alerts based on data in an Azure Log Analytics workspace.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Monitor can create alert rules based on query results from a Log Analytics workspace.

### 270. From Azure Service Health, an administrator can view the health of all the services in an Azure environment.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Service Health gives a consolidated view of the health of all Azure services relevant to your environment.

### 271. From Azure Service Health, an administrator can create a rule to be alerted if an Azure service fails.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Service Health lets you configure alerts that trigger if a subscribed Azure service experiences an issue.

### 272. From Azure Service Health, an administrator can prevent a service failure.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Service Health only reports/notifies about issues — it cannot prevent a service failure from occurring.

### 273. You need to identify which blades in the Azure portal must be used to perform the following task: Monitor the health of Azure services.

- [ ] Monitor.
- [ ] Subscriptions.
- [ ] Marketplace.
- [ ] Advisor.

**Answer:** Monitor.

**Explanation:** The Monitor blade is where you check the health/status/metrics of Azure services and resources.

### 274. You need to identify which blades in the Azure portal must be used to perform the following task: Browse available virtual machine images.

- [ ] Monitor.
- [ ] Subscriptions.
- [ ] Marketplace.
- [ ] Advisor.

**Answer:** Marketplace.

**Explanation:** The Marketplace blade is where you browse and select available VM images/solutions to deploy.

### 275. You need to identify which blades in the Azure portal must be used to perform the following task: View security recommendations.

- [ ] Monitor.
- [ ] Subscriptions.
- [ ] Marketplace.
- [ ] Advisor.

**Answer:** Advisor.

**Explanation:** The Advisor blade surfaces security (and cost/reliability/performance) recommendations.

### 276. Azure Advisor can generate a list of Azure virtual machines that are protected by Azure Backup.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Advisor doesn't specifically list which VMs are protected by Azure Backup — that's Backup's own reporting.

### 277. If you implement the security recommendations provided by Azure Advisor, your company secure score will decrease.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Implementing Advisor's security recommendations improves your secure score — it does not decrease it.

### 278. To maintain Microsoft support, you must implement the security recommendations provided by Azure Advisor within a period of 30 days.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** There's no strict 30-day Microsoft support requirement tied to implementing Advisor recommendations.

### 279. What can you use to automatically send an alert if an administrator stops an Azure virtual machine?

- [ ] Azure Advisor.
- [ ] Azure Service Health.
- [ ] Azure Monitor.
- [ ] Azure Network Watcher.

**Answer:** Azure Monitor.

**Explanation:** Azure Monitor lets you configure alert rules (e.g., on Activity Log events) to notify when a VM is stopped by an admin.

### 280. You have an Azure environment. You need to create a new Azure virtual machine from a tablet that runs the Android operating system. What are three possible solutions?

- [ ] Use Bash in Azure Cloud Shell.
- [ ] Use PowerShell in Azure Cloud Shell.
- [ ] Use the PowerApps portal.
- [ ] Use the Security & Compliance admin center.
- [ ] Use the Azure portal.

**Answer:** Use Bash in Azure Cloud Shell.; Use PowerShell in Azure Cloud Shell.; Use the Azure portal.

**Explanation:** Bash/PowerShell in Cloud Shell and the Azure Portal are all browser-based and work from an Android tablet.

### 281. Azure Advisor provides recommendations on how to improve the security of a Microsoft Entra ID environment.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Advisor does not provide Microsoft Entra ID security recommendations (that's a separate Identity Secure Score feature).

### 282. Azure Advisor provides recommendations on how to reduce the cost of running Azure virtual machines.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Advisor's Cost category recommends resizing or shutting down underutilized VMs to cut spend.

### 283. Azure Advisor provides recommendations on how to configure the network settings on Azure virtual machines.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Advisor does not go into detailed VM network configuration guidance.

### 284. Several support engineers plan to manage Azure by using the Computer1-Windows 10. You need to identify which Azure management tools can be used.

- [ ] The Azure CLI and the Azure portal.
- [ ] The Azure portal and Azure PowerShell.
- [ ] The Azure CLI and Azure PowerShell.
- [ ] The Azure CLI, the Azure portal, and Azure PowerShell.

**Answer:** The Azure CLI, the Azure portal, and Azure PowerShell.

**Explanation:** Windows 10 supports the Azure CLI, the web Portal, and Azure PowerShell.

### 285. Several support engineers plan to manage Azure by using the Computer2-Ubuntu. You need to identify which Azure management tools can be used.

- [ ] The Azure CLI and the Azure portal.
- [ ] The Azure portal and Azure PowerShell.
- [ ] The Azure CLI and Azure PowerShell.
- [ ] The Azure CLI, the Azure portal, and Azure PowerShell.

**Answer:** The Azure CLI, the Azure portal, and Azure PowerShell.

**Explanation:** Ubuntu supports the Azure CLI, the web Portal (browser), and Azure PowerShell (via PowerShell Core).

### 286. Several support engineers plan to manage Azure by using the Computer3-MacOS Mojave. You need to identify which Azure management tools can be used.

- [ ] The Azure CLI and the Azure portal.
- [ ] The Azure portal and Azure PowerShell.
- [ ] The Azure CLI and Azure PowerShell.
- [ ] The Azure CLI, the Azure portal, and Azure PowerShell.

**Answer:** The Azure CLI, the Azure portal, and Azure PowerShell.

**Explanation:** macOS also supports the Azure CLI, the web Portal, and Azure PowerShell (via PowerShell Core).

### 287. You can access Compliance Manager from the [...].

- [ ] Microsoft Entra ID admin center.
- [ ] Azure portal.
- [ ] Microsoft 365 Admin Center.
- [ ] Microsoft Service Trust Portal.

**Answer:** Microsoft 365 Admin Center.

**Explanation:** Compliance Manager is accessed via the Microsoft 365 Admin Center (part of the Service Trust Portal ecosystem).

### 288. An Azure administrator plans to run a PowerShell script that creates Azure resources. You need to recommend which computer configuration to use to run the script. Which three computers can run the script?

- [ ] A computer that runs macOS and has PowerShell Core 6.0 installed.
- [ ] A computer that runs Windows 10 and has the Azure PowerShell module installed.
- [ ] A computer that runs Linux and has the Azure PowerShell module installed.
- [ ] A computer that runs Linux and has the Azure CLI tools installed.
- [ ] A computer that runs Chrome OS and uses Azure Cloud Shell.

**Answer:** A computer that runs macOS and has PowerShell Core 6.0 installed.; A computer that runs Windows 10 and has the Azure PowerShell module installed.; A computer that runs Chrome OS and uses Azure Cloud Shell.

**Explanation:** macOS w/ PowerShell Core, Windows 10 w/ Azure PowerShell module, and Chrome OS via Cloud Shell can all run the script — Linux with just CLI tools cannot run a native PowerShell script.

### 289. Azure Firewall will encrypt all the network traffic sent from Azure to the Internet.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Firewall filters/controls traffic; it doesn't automatically encrypt all outbound internet traffic.

### 290. A Network Security Group (NSG) will encrypt all the network traffic sent from Azure to the Internet.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** NSGs filter traffic by rule; they do not encrypt traffic.

### 291. Azure virtual machines that run Windows Server 2016 can encrypt network traffic sent to the Internet.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** The OS itself doesn't automatically encrypt outbound internet traffic without an explicit configuration like a VPN/TLS setup on the application.

### 292. Microsoft Defender for Cloud can monitor Azure resources and on-premises resources.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft Defender for Cloud (via Azure Arc) can extend security monitoring to on-premises and multi-cloud resources too.

### 293. All Microsoft Defender for Cloud features are free.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Microsoft Defender for Cloud has a free tier and a paid 'Defender' (enhanced) tier — not all features are free.

### 294. From Microsoft Defender for Cloud, you can download a Regulatory Compliance report.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft Defender for Cloud provides downloadable Regulatory Compliance reports (e.g., ISO, PCI-DSS status).

### 295. You plan to implement several security services for an Azure environment. You need to identify which Azure services must be used to meet the following security requirements: Monitor threats by using sensors.

- [ ] Azure Monitor.
- [ ] Microsoft Defender for Cloud.
- [ ] Microsoft Entra ID Identity Protection.
- [ ] Microsoft Defender for Identity.

**Answer:** Microsoft Defender for Identity.

**Explanation:** Microsoft Defender for Identity uses sensors on domain controllers to detect identity-based threats.

### 296. You plan to implement several security services for an Azure environment. You need to identify which Azure services must be used to meet the following security requirements: Enforce Azure Multi-Factor Authentication (MFA) based on a condition.

- [ ] Azure Monitor.
- [ ] Microsoft Defender for Cloud.
- [ ] Microsoft Entra ID Identity Protection.
- [ ] Microsoft Defender for Identity.

**Answer:** Microsoft Entra ID Identity Protection.

**Explanation:** Microsoft Entra ID (Azure AD) Identity Protection enforces MFA/access conditionally based on detected risk.

### 297. Your Azure environment contains multiple Azure virtual machines. You need to ensure that a virtual machine named VM1 is accessible from the Internet over HTTP. What are two possible solutions?

- [ ] Modify an Azure Traffic Manager profile.
- [ ] Modify a Network Security Group (NSG).
- [ ] Modify a DDoS protection plan.
- [ ] Modify an Azure firewall.

**Answer:** Modify a Network Security Group (NSG).; Modify an Azure firewall.

**Explanation:** Modifying an NSG or an Azure Firewall rule can both be used to allow inbound HTTP to a VM.

### 298. You can enable Just In Time (JIT) VM access by using [...].

- [ ] Azure Bastion.
- [ ] Azure Firewall.
- [ ] Azure Front Door.
- [ ] Microsoft Defender for Cloud.

**Answer:** Microsoft Defender for Cloud.

**Explanation:** Just-In-Time VM access is a feature provided by Microsoft Defender for Cloud to reduce exposed management ports.

### 299. You can associate a Network Security Group (NSG) to a virtual network subnet.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** NSGs can be associated directly with a virtual network subnet.

### 300. You can associate a Network Security Group (NSG) to a virtual network.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** NSGs cannot be associated with an entire virtual network directly — only with subnets or individual network interfaces.

### 301. You can associate a Network Security Group (NSG) to a network interface.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** NSGs can be associated directly with a VM's network interface (NIC).

### 302. After you create a virtual machine, you need to modify to allow connections to TCP port 8080 on the virtual machine [...].

- [ ] Network Security Group (NSG).
- [ ] Virtual network gateway.
- [ ] Virtual network.
- [ ] Route table.

**Answer:** Network Security Group (NSG).

**Explanation:** Allowing a specific TCP port like 8080 is done by adding/modifying a Network Security Group rule.

### 303. You can create custom Azure roles to control access to resources.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure supports custom RBAC roles beyond the built-in ones, letting you define precise permission sets.

### 304. A user account can be assigned to multiple Azure roles.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** A single user can hold multiple different Azure roles (e.g., on different resources or scopes).

### 305. A resource group can have the Owner role assigned to multiple users.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Multiple users can simultaneously be assigned the Owner role on the same resource group.

### 306. You need to collect and automatically analyze security events from Microsoft Entra ID. What should you use?

- [ ] Azure Sentinel.
- [ ] Azure Synapse Analytics.
- [ ] Microsoft Entra Connect.
- [ ] Azure Key Vault.

**Answer:** Azure Sentinel.

**Explanation:** Azure Sentinel (Microsoft Sentinel) is the cloud-native SIEM that automatically collects and analyzes security events, including from Entra ID.

### 307. From [...] you can view which user turned off a specific virtual machine during the last 14 days.

- [ ] Azure Access Control IAM.
- [ ] Azure Event Hubs.
- [ ] Azure Activity Log.
- [ ] Azure Service Health.

**Answer:** Azure Activity Log.

**Explanation:** The Azure Activity Log records control-plane actions like who stopped a VM, viewable for the past 90 days (including within 14 days).

### 308. Which Azure service can you use as a security information and event management (SIEM) solution?

- [ ] Azure Analysis Services.
- [ ] Azure Sentinel.
- [ ] Microsoft Purview Information Protection.
- [ ] Azure Cognitive Services.

**Answer:** Azure Sentinel.

**Explanation:** Azure Sentinel is Microsoft's SIEM (Security Information and Event Management) solution.

### 309. Your company implements [Azure policies] to automatically add a watermark to Microsoft Word documents that contain credit card information.

- [ ] No change is needed.
- [ ] DDoS protection.
- [ ] Microsoft Purview Information Protection.
- [ ] Microsoft Entra ID Identity Protection.

**Answer:** Microsoft Purview Information Protection.

**Explanation:** Microsoft Purview Information Protection (not generic Azure Policy) applies content-based classification/watermarking to sensitive documents.

### 310. You have an Azure virtual network named VNET1 in a resource group named RG1. You assign the Azure Policy definition of Not Allowed Resource Type and specify that virtual networks are not an allowed resource type in RG1. VNET1 [...].

- [ ] is deleted automatically.
- [ ] is moved automatically to another resource group.
- [ ] continues to function normally.
- [ ] is now a read-only object.

**Answer:** continues to function normally.

**Explanation:** Since VNET1 already exists before the policy is applied, the policy blocks new deployments of that type but doesn't retroactively affect the existing resource — it continues working normally.

### 311. You can create Group Polices in Microsoft Entra ID.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure AD/Entra ID supports Group Policy-like settings via device configuration profiles/Group Policy objects for hybrid-joined devices.

### 312. You can join Windows 10 devices to Microsoft Entra ID.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Windows 10 devices can be Microsoft Entra joined directly.

### 313. You can join Android devices to Microsoft Entra ID.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Android devices are enrolled via Intune/MDM, not 'joined' to Microsoft Entra ID in the same way as Windows devices.

### 314. The [...] explains what data Microsoft processes, how Microsoft processes the data, and the purpose of processing the data.

- [ ] Microsoft Online Services Privacy Statement.
- [ ] Microsoft Online Services Terms.
- [ ] Microsoft Online Service Level Agreement.
- [ ] Online Subscription Agreement for Microsoft Azure.

**Answer:** Microsoft Online Services Privacy Statement.

**Explanation:** The Microsoft Online Services Privacy Statement documents what data Microsoft processes and why.

### 315. An Azure Policy initiative definition is a [...].

- [ ] collection of policy definitions.
- [ ] collection of Azure Policy definition assignments.
- [ ] group of Azure Blueprints definitions.
- [ ] group of role-based access control (RBAC) role assignments.

**Answer:** collection of policy definitions.

**Explanation:** An Azure Policy initiative is a grouped collection of individual policy definitions applied together.

### 316. [...] provide organizations with the ability to manage the compliance of Azure resources across multiple subscriptions.

- [ ] Resource groups.
- [ ] Management groups.
- [ ] Azure policies.
- [ ] Azure App Service plans.

**Answer:** Azure policies.

**Explanation:** Azure Policies (often via management groups) manage resource compliance across multiple subscriptions.

### 317. General Data Protection Regulation (GDPR) defines data protection and privacy rules.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** GDPR is the EU regulation establishing data protection and privacy rules.

### 318. General Data Protection Regulation (GDPR) applies to companies that offer goods or services to individuals in the EU.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** GDPR applies extraterritorially to any company offering goods/services to individuals in the EU, regardless of company location.

### 319. Azure can be used to build a General Data Protection Regulation (GDPR)-compliant infrastructure.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft provides tools/controls (encryption, compliance features) enabling customers to build GDPR-compliant solutions on Azure.

### 320. You can add an Azure Resource Manager template to an Azure blueprint.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Blueprints can include ARM templates as one of their artifacts.

### 321. You can assign an Azure blueprint to a resource group.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure Blueprints are assigned to subscriptions, not directly to resource groups.

### 322. You can use Azure Blueprints to grant permissions to a resource.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Blueprints can include role assignments as artifacts, effectively granting permissions as part of the blueprint.

### 323. Azure China is operated by Microsoft.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure China (21Vianet) is operated by a local Chinese partner (21Vianet), not directly by Microsoft.

### 324. Azure Government is operated by Microsoft.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Government is operated by Microsoft, in a dedicated, isolated instance for US government use.

### 325. Azure Government is available only to US government agencies and their partners.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Government is restricted to US federal/state/local government entities and their qualified contractors.

### 326. An Azure resource can have multiple Delete locks.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Multiple Delete locks can be applied to the same resource by different administrators.

### 327. An Azure resource inherits locks from its resource group.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Locks applied at the resource group (or subscription) level are inherited by the resources within it.

### 328. If an Azure resource has a Read-only lock, you can add a Delete lock to the resource.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** A Delete lock can be added even if a Read-only lock already exists — locks can be stacked.

### 329. Authorization to access Azure resources can be provided only to Microsoft Entra ID users.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Authorization can also be granted to identities beyond Entra ID users, such as service principals or synced/federated identities.

### 330. Identities stored in Microsoft Entra ID, third-party cloud services, and on-premises Active Directory can be used to access Azure resources.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure supports federated/synced identities from AD, third-party providers, and Entra ID for resource access.

### 331. Azure has built-in authentication and authorization services that provide secure access to Azure resources.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure has native Entra ID-based authentication/authorization built in for securing resource access.

### 332. Identities stored in an on-premises Active Directory can be synchronized to Microsoft Entra ID.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure AD Connect (Entra Connect) synchronizes on-prem AD identities into Microsoft Entra ID.

### 333. You can view your company regulatory compliance report from [...].

- [ ] Azure Advisor.
- [ ] Azure Analysis Services.
- [ ] Azure Monitor.
- [ ] Microsoft Defender for Cloud.

**Answer:** Microsoft Defender for Cloud.

**Explanation:** Microsoft Defender for Cloud provides the Regulatory Compliance dashboard/report for your environment.

### 334. Your company has an Azure subscription that contains resources in several regions. You need to ensure that administrators can only create resources in those regions. What should you use?

- [ ] A read-only lock.
- [ ] An Azure policy.
- [ ] A management group.
- [ ] A reservation.

**Answer:** An Azure policy.

**Explanation:** Azure Policy can restrict which regions administrators are allowed to deploy resources into.

### 335. Microsoft Entra ID requires the implementation of domain controllers on Azure virtual machines.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Microsoft Entra ID is a cloud identity service and does not require domain controller VMs (that's traditional AD DS).

### 336. Microsoft Entra ID provides authentication services for resources hosted in Azure and Microsoft 365.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft Entra ID provides unified authentication for both Azure resources and Microsoft 365 services.

### 337. Each user account in Microsoft Entra ID can be assigned only one license.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A single user can be assigned multiple licenses (e.g., Microsoft 365 + Entra ID P1) simultaneously.

### 338. To implement an Azure Multi-Factor Authentication (MFA) solution, you must sync on-premises identities to the cloud.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** MFA can be enabled for cloud-only accounts without requiring directory sync — sync isn't a prerequisite.

### 339. Two valid methods for Azure Multi-Factor Authentication (MFA) are picture identification and a passport number.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Valid MFA methods are phone call/SMS, authenticator app, or hardware token — not photo ID or passport numbers.

### 340. You can configure the Microsoft Entra ID activity logs to appear in Azure Monitor.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Entra ID sign-in/audit logs can be routed into Azure Monitor/Log Analytics for centralized analysis.

### 341. From Azure Monitor, you can monitor resources across multiple Azure subscriptions.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Monitor can aggregate and display data across multiple subscriptions in one view.

### 342. From Azure Monitor, you can create alerts.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Monitor lets you define alert rules that trigger notifications/actions based on conditions.

### 343. You create a resource group named RG1 in Azure Resource Manager. You need to prevent the accidental deletion of the resources in RG1. Which setting should you use?

- [ ] Quickstart.
- [ ] Resource costs.
- [ ] Deployments.
- [ ] Policies.
- [ ] Properties.
- [ ] Locks.
- [ ] Automation script.

**Answer:** Locks.

**Explanation:** Applying a Lock (specifically a Delete lock) on the resource group prevents accidental deletion of its resources.

### 344. You have a resource group named RG1. You need to prevent the creation of virtual machines only in RG1. The solution must ensure that other objects can be created in RG1. What should you use?

- [ ] A lock.
- [ ] An Azure role.
- [ ] A tag.
- [ ] An Azure policy.

**Answer:** An Azure policy.

**Explanation:** An Azure Policy can restrict just VM creation in RG1 while still allowing other resource types to be created.

### 345. You have an Azure subscription and 100 Windows 10 devices. You need to ensure that only users whose devices have the latest security patches installed can access Microsoft Entra ID-integrated applications. What should you implement?

- [ ] A conditional access policy.
- [ ] Azure Bastion.
- [ ] Azure Firewall.
- [ ] Azure Policy.

**Answer:** A conditional access policy.

**Explanation:** A Conditional Access policy can require device compliance (e.g., latest patches) before granting access to Entra ID apps.

### 346. [...] enables users to authenticate to multiple applications by using single sign-on (SSO).

- [ ] Application security groups in Azure.
- [ ] Microsoft Entra ID.
- [ ] Azure Key Vault.
- [ ] Microsoft Defender for Cloud.

**Answer:** Microsoft Entra ID.

**Explanation:** Microsoft Entra ID provides SSO, letting users authenticate once to access multiple connected applications.

### 347. You deploy an Azure resource. The resource becomes unavailable for an extended period due to a service outage. Microsoft will [...].

- [ ] refund your bank account.
- [ ] migrate the resource to another subscription.
- [ ] credit your Azure account.
- [ ] send you a coupon code that you can redeem for Azure credits.

**Answer:** credit your Azure account.

**Explanation:** Per the SLA, Microsoft issues service credits to your account for downtime breaching the guaranteed SLA — not a bank refund.

### 348. Which task can you perform by using Azure Advisor?

- [ ] Integrate Active Directory and Microsoft Entra ID.
- [ ] Estimate the costs of an Azure solution.
- [ ] Confirm that Azure subscription security follows best practices.
- [ ] Evaluate which on-premises resources can be migrated to Azure.

**Answer:** Estimate the costs of an Azure solution.

**Explanation:** Azure Advisor includes cost recommendations that can help estimate/optimize the cost of a solution.

### 349. If your company uses an Azure free account, you will only be able to use a subset of Azure services.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** The Azure free account provides limited/free-tier access to a subset of services, not everything unrestricted.

### 350. All Azure free accounts expire after a specific period.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Free accounts include a 12-month period of free services plus credits that expire after the trial period.

### 351. You can create up to 10 Azure free accounts by using the same Microsoft account.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Multiple free accounts under one Microsoft account aren't supported/intended — it's meant to be one per identity.

### 352. All Azure services in private preview must be accessed by using a separate Azure portal.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Private preview services are still managed through the standard Azure Portal (with limited/invite-only visibility), not a separate portal.

### 353. Azure services in public preview can be used in production environments.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Public preview services can technically be used in production, though Microsoft doesn't recommend it since there's no SLA.

### 354. Azure services in public preview are subject to a Service Level Agreement (SLA).

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Preview (non-GA) services are explicitly excluded from SLA guarantees.

### 355. A Standard support plan is included in an Azure free account.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A free account only includes Basic-level support by default, not Standard.

### 356. Match the Azure services to the appropriate descriptions.

- [ ] Extends on-premises networks to the Microsoft cloud via a private connection: VPN gateway. Combines two or more Azure virtual networks into a single logical virtual network: ExpressRoute. Provides an encrypted connection from on-premises networks to Azure via a public network: Virtual network peering.
- [ ] Extends on-premises networks to the Microsoft cloud via a private connection: ExpressRoute. Combines two or more Azure virtual networks into a single logical virtual network: VPN gateway. Provides an encrypted connection from on-premises networks to Azure via a public network: Virtual network peering.
- [ ] Extends on-premises networks to the Microsoft cloud via a private connection: VPN gateway. Combines two or more Azure virtual networks into a single logical virtual network: Virtual network peering. Provides an encrypted connection from on-premises networks to Azure via a public network: ExpressRoute.
- [ ] Extends on-premises networks to the Microsoft cloud via a private connection: ExpressRoute. Combines two or more Azure virtual networks into a single logical virtual network: Virtual network peering. Provides an encrypted connection from on-premises networks to Azure via a public network: VPN gateway.

**Answer:** Extends on-premises networks to the Microsoft cloud via a private connection: ExpressRoute. Combines two or more Azure virtual networks into a single logical virtual network: Virtual network peering. Provides an encrypted connection from on-premises networks to Azure via a public network: VPN gateway.

**Explanation:** ExpressRoute = private dedicated on-prem connection, VNet peering = connecting VNets together, VPN gateway = encrypted connection over the public internet.

### 357. Support from MSDN forums is only provided to companies that have a pay-as-you-go subscription.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** MSDN forum support (community-based) is generally available regardless of subscription type, not limited to pay-as-you-go.

### 358. A user who is assigned the Owner role can transfer ownership of an Azure subscription.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Subscription ownership transfer is a distinct administrative action requiring specific processes, not something automatically enabled just by being Owner.

### 359. You can convert the Azure subscription of your company from Free Trial to Pay-As-You-Go.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** You can convert/upgrade a Free Trial subscription to Pay-As-You-Go directly in the Azure Portal.

### 360. With Azure Reservations, you pay less fer virtual machines than with pay as-you-go pricing.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Reserved Instances offer a discount compared to standard pay-as-you-go pricing in exchange for a 1- or 3-year commitment.

### 361. Two Azure virtual machines that use the B25 size have the same monthly costs.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** VM cost can differ based on region, reservation status, or usage even for the same size (e.g., B2s).

### 362. When an Azure virtual machine is stopped, you continue to pay storage costs for the virtual machine.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** A stopped (not deallocated) VM still incurs storage costs for its attached disks.

### 363. How should you calculate the monthly uptime percentage? [...] ÷ Maximum Available Minutes × 100.

- [ ] Downtime in Minutes.
- [ ] Maximum Available Minutes.
- [ ] (Maximum Available Minutes-Downtime in Minutes).

**Answer:** (Maximum Available Minutes-Downtime in Minutes).

**Explanation:** Uptime % = (Maximum Available Minutes − Downtime Minutes) ÷ Maximum Available Minutes × 100.

### 364. How should you calculate the monthly uptime percentage? (Maximum Available Minutes-Downtime in Minutes) ÷ [...] × 100.

- [ ] 60.
- [ ] 1,440.
- [ ] Maximum Available Minutes.

**Answer:** Maximum Available Minutes.

**Explanation:** The denominator in the uptime formula is Maximum Available Minutes.

### 365. How should you calculate the monthly uptime percentage? (Maximum Available Minutes-Downtime in Minutes) ÷ Maximum Available Minutes × [...].

**Answer:** 100.

**Explanation:** The formula is multiplied by 100 to express the result as a percentage.

### 366. By creating additional resource groups in an Azure subscription, additional costs are incurred.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Resource groups themselves are free logical containers — creating more doesn't add direct cost.

### 367. By copying several gigabits of data to Azure from an on-premises network over a VPN, additional data transfer costs are incurred.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Inbound data transfer TO Azure is generally free; it's outbound (egress) that can incur charges.

### 368. An Azure service is available to all Azure customers when it is in [...].

- [ ] Public preview.
- [ ] Private preview.
- [ ] Development.
- [ ] Development an Enterprise Agreement (EA) subscription.

**Answer:** Public preview.

**Explanation:** A service becomes available to all customers once it reaches public preview (with no SLA) or later GA.

### 369. Most Azure services are introduced in private preview before being introduced in public preview, and then in general availability.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft's typical rollout is private preview → public preview → general availability.

### 370. Azure services in public preview can be managed only by using the Azure CLI.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Public preview services can be managed via Portal, PowerShell, and SDKs too, not CLI-only.

### 371. The cost of an Azure service in private preview decreases when the service becomes generally available.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** There isn't a rule that pricing automatically decreases when a preview service becomes GA — pricing is set independently.

### 372. Your Azure trial account expired last week. You are now unable to [...].

- [ ] create additional Microsoft Entra ID user accounts.
- [ ] start an existing Azure virtual machine.
- [ ] access your data stored in Azure.
- [ ] access the Azure portal.

**Answer:** start an existing Azure virtual machine.

**Explanation:** An expired trial blocks starting compute resources like VMs, though portal/data access generally remains available.

### 373. Your company plans to purchase an Azure subscription. The company has support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Professional Direct support plan. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** The Professional Direct plan does provide phone/email access to support engineers, satisfying this policy requirement.

### 374. Your company has 10 departments. The company plans to implement an Azure environment. You need to ensure that each department can use a different payment option for the Azure services it consumes. What should you create for each department?

- [ ] A reservation.
- [ ] A subscription.
- [ ] A resource group.
- [ ] A container instance.

**Answer:** A subscription.

**Explanation:** Separate subscriptions per department allow separate billing/payment methods for each.

### 375. An Azure free account has a spending limit.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Free accounts include a spending limit to prevent accidental charges beyond the free credit.

### 376. An Azure free account has a limit of 2TB of data that can be uploaded to Azure.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** There's no fixed 2TB upload cap tied to the free account tier — that's not an accurate Azure free-account limit.

### 377. An Azure free account can contain an unlimited number of web apps.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Free tier web app quotas are limited (e.g., 10 free web apps in App Service), not unlimited.

### 378. An Azure service in private preview is released to all Azure customers.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Private preview is limited/invite-only, not released broadly.

### 379. An Azure service in public preview is released to all Azure customers.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Public preview is open to try for all Azure customers (without SLA guarantees).

### 380. An Azure service in general availability is released to a subset of Azure customers.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** General availability (GA) means release to all customers, not a limited subset.

### 381. With a consumption-based plan, you pay a fixed rate for all data sent to or from virtual machines hosted in the cloud.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Consumption-based billing charges based on actual usage/metered rates, not one fixed flat rate for everything.

### 382. With a consumption-based plan, you reduce overall costs by paying only for extra capacity when it is required.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Consumption-based (pay only for what you use) models help control costs by avoiding paying for idle capacity.

### 383. Serverless computing is an example of a consumption-based plan.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Serverless (e.g., Azure Functions) bills strictly per execution/consumption, a textbook consumption-based model.

### 384. The cost of Azure resources can vary between regions.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Pricing for the same Azure service can differ by region due to local infrastructure/operating costs.

### 385. An Azure Reservation is used to reserve server capacity at a specific data center.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Reservations let you pre-commit/reserve capacity (compute) for a 1- or 3-year term at a discount.

### 386. You can stop an Azure SQL Database instance to decrease costs.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Azure SQL Database (a managed PaaS DB) can't simply be 'stopped' like a VM to save cost — you'd resize or use serverless tiers instead.

### 387. You have an application that is comprised of an Azure web app that has a Service Level Agreement (SLA) of 99.95 percent and an Azure SQL database that has an SLA of 99.99 percent. The composite SLA for the application is [...].

- [ ] the product of both SLAS, which equals 99.94 percent.
- [ ] the lowest SLA associated to the application, which is 99.95 percent.
- [ ] the highest SLA associated to the application, which is 99.99 percent.
- [ ] the difference between the two SLAS, which is 0.05 percent.

**Answer:** the product of both SLAS, which equals 99.94 percent.

**Explanation:** Composite SLA multiplies the individual component SLAs together: 0.9995 × 0.9999 ≈ 99.94%.

### 388. The Service Level Agreement (SLA) guaranteed uptime for paid Azure services is at least 99.9 percent.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft's SLA guarantees at least 99.9% uptime for most paid Azure services.

### 389. Companies can increase the Service Level Agreement (SLA) guaranteed uptime by adding Azure resources to multiple regions.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Spreading resources across multiple regions increases overall resilience/composite availability.

### 390. Companies can increase the Service Level Agreement (SLA) guaranteed uptime by purchasing multiple subscriptions.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Simply buying more subscriptions has no effect on a resource's inherent SLA — SLA depends on architecture, not subscription count.

### 391. Match the Azure Services service to the correct description.

- [ ] A managed service that provides bidirectional communication between IoT devices and Azure: IoT Hub. A fully managed software as a service (SaaS) solution to connect, monitor, and manage IoT devices at scale: IoT Central. A software and hardware solution that provides communication and security features for IoT devices: Azure Sphere.
- [ ] A managed service that provides bidirectional communication between IoT devices and Azure: Azure Sphere. A fully managed software as a service (SaaS) solution to connect, monitor, and manage IoT devices at scale: IoT Hub. A software and hardware solution that provides communication and security features for IoT devices: IoT Central.
- [ ] A managed service that provides bidirectional communication between IoT devices and Azure: Azure Sphere. A fully managed software as a service (SaaS) solution to connect, monitor, and manage IoT devices at scale: IoT Central. A software and hardware solution that provides communication and security features for IoT devices: IoT Hub.
- [ ] A managed service that provides bidirectional communication between IoT devices and Azure: IoT Hub. A fully managed software as a service (SaaS) solution to connect, monitor, and manage IoT devices at scale: Azure Sphere. A software and hardware solution that provides communication and security features for IoT devices: IoT Central.

**Answer:** A managed service that provides bidirectional communication between IoT devices and Azure: IoT Hub. A fully managed software as a service (SaaS) solution to connect, monitor, and manage IoT devices at scale: IoT Central. A software and hardware solution that provides communication and security features for IoT devices: Azure Sphere.

**Explanation:** IoT Hub = device-to-cloud messaging backbone, IoT Central = SaaS app for managing IoT at scale, Azure Sphere = secured hardware/software IoT platform.

### 392. You need to request that Microsoft increase a subscription quota limit for your company. Which blade should you use from the Azure portal?

- [ ] Create a resource.
- [ ] All services.
- [ ] Favorites.
- [ ] Dashboard.
- [ ] All resources.
- [ ] Resource groups.
- [ ] App Services.
- [ ] Function Apps.
- [ ] SQL databases.
- [ ] Azure Cosmos DB.
- [ ] Virtual machines.
- [ ] Load balancers.
- [ ] Help + support.

**Answer:** Help + support.

**Explanation:** The Help + Support blade is where you file a request to increase subscription quota limits.

### 393. You can use in Azure to send email alerts when the cost of the current billing period for an Azure subscription exceeds a specified limit.

- [ ] Advisor recommendations.
- [ ] Access control (IAM).
- [ ] Budget alerts.
- [ ] Compliance.

**Answer:** Budget alerts.

**Explanation:** Budget alerts in Azure Cost Management notify you via email when spending crosses a set threshold.

### 394. From the Azure portal, you can distinguish between services that are generally available and services that are in public preview.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** The Azure Portal marks services/features as 'Preview' so you can distinguish GA vs public preview offerings.

### 395. After an Azure service becomes generally available, the service is no longer updated with new features.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** GA services continue to receive updates and new features after release — GA isn't a feature freeze.

### 396. When you create Azure resources for a service in public preview, you must recreate the resources once the service becomes generally available.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Resources created during public preview typically continue working after GA without needing to be recreated.

### 397. When using an Azure ExpressRoute connection, inbound data traffic from an on-premises network to Azure is always free.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Inbound data transfer over ExpressRoute (into Azure) is free, regardless of connection type.

### 398. Outbound data traffic from Azure to an on-premises network is always free.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Outbound data transfer (egress) from Azure to on-prem typically incurs bandwidth charges.

### 399. Data traffic between Azure services within the same Azure region is always free.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Data transferred between services within the same region is generally free (no cross-region egress fees apply).

### 400. Your company has an Azure subscription that contains the following unused resources: 20 user accounts in Microsoft Entra ID. Five groups in Microsoft Entra ID. 10 public IP addresses. 10 network interfaces. You need to reduce the Azure costs for the company. Which unused resources should you remove?

- [ ] The network interfaces.
- [ ] The public IP addresses.
- [ ] The groups.
- [ ] The user accounts.

**Answer:** The public IP addresses.

**Explanation:** Public IP addresses are billed resources, so removing the unused ones is what reduces cost; the other listed items (users/groups/NICs) generally aren't billed directly.

### 401. If an Azure virtual machine has a status of Stopped (deallocated), you will continue to pay for.

- [ ] Compute capacity.
- [ ] I/O operations.
- [ ] Networking.
- [ ] Storage.

**Answer:** Storage.

**Explanation:** A deallocated VM stops compute billing but you still pay for the storage (disks) attached to it.

### 402. Storing 1 TB of data in Azure Blob storage will always cost the same, regardless of the Azure region in which the data is located.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Blob storage pricing varies by region due to different underlying infrastructure costs.

### 403. When you use a general-purpose v2 Azure Storage account, you are only charged for the amount of data that is stored. All read and write operations are free.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** GPv2 storage accounts charge for both stored data AND transaction operations (reads/writes), not just storage.

### 404. Transferring data between Azure Storage accounts in different Azure regions is free.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Cross-region data transfer between storage accounts is a billed egress operation, not free.

### 405. In Microsoft Entra ID Premium P2, at least 99.9 percent availability is guaranteed.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft Entra ID Premium P2 carries an SLA guaranteeing at least 99.9% availability.

### 406. The Service Level Agreement (SLA) for Microsoft Entra ID Premium P2 is the same as the SLA for Microsoft Entra ID Free.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Entra ID Free doesn't carry the same formal SLA that paid tiers like P2 do — they're not identical.

### 407. All paying Azure customers receive a credit if their monthly uptime percentage is below the guaranteed amount in the Service Level Agreement (SLA).

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Microsoft issues service credits automatically to eligible paying customers when SLA uptime commitments aren't met.

### 408. Adding resource groups in an Azure subscription generates additional costs.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Resource groups are free logical containers; they don't add direct billing cost by existing.

### 409. Copying 10 GB of data to Azure from an on-premises network over a VPN generates additional Azure data transfer costs.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Inbound data transfer to Azure over VPN is generally free.

### 410. Copying 10 GB of data from Azure to an on-premises network over a VPN generates additional Azure data transfer costs.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Outbound data transfer from Azure over VPN to on-prem typically incurs data transfer charges.

### 411. Each Azure subscription can contain multiple account administrators.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A subscription has a single account administrator role (though multiple co-administrators/owners can exist via RBAC).

### 412. Each Azure subscription can be managed by using a Microsoft account only.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A subscription can also be managed using an Entra ID work/school account, not exclusively a personal Microsoft account.

### 413. An Azure resource group contains multiple Azure subscriptions.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** It's the reverse — a subscription contains many resource groups, not a resource group containing subscriptions.

### 414. Data that is stored in the Archive access tier of an Azure Storage account [...].

- [ ] can be accessed at any time by using azcopy.exe.
- [ ] can only be read by using Azure Backup.
- [ ] must be restored before the data can be accessed.
- [ ] must be rehydrated before the data can be accessed.

**Answer:** must be rehydrated before the data can be accessed.

**Explanation:** Archive-tier data is offline and must be rehydrated (moved to Hot/Cool) before it can be read.

### 415. You deploy an Azure resource. The resource becomes unavailable for an extended period due to a service outage. Microsoft will automatically [refund your bank account].

- [ ] No change is needed.
- [ ] Automatically migrate the resource to another subscription.
- [ ] Automatically credit your account.
- [ ] Send you a coupon code that you can redeem for Azure credits.

**Answer:** Automatically credit your account.

**Explanation:** Per SLA terms, Microsoft automatically issues a service credit to the customer's account, not a bank refund.

### 416. When you need to delegate permissions to several Azure virtual machines simultaneously, you must deploy the Azure virtual machines [to the same Azure region].

- [ ] No change is needed.
- [ ] By using the same Azure Resource Manager template.
- [ ] To the same resource group.
- [ ] To the same availability zone.

**Answer:** To the same resource group.

**Explanation:** Deploying VMs into the same resource group lets you delegate permissions to all of them at once via one role assignment.

### 417. Azure Cosmos DB is an example of a [...] offering.

- [ ] Platform as a Service (PaaS).
- [ ] Infrastructure as a service (IaaS).
- [ ] Serverless.
- [ ] Software as a service (SaaS).

**Answer:** Platform as a Service (PaaS).

**Explanation:** Azure Cosmos DB is a fully managed database — a PaaS offering.

### 418. The Microsoft Service Trust Portal can be accessed by using a Microsoft cloud services account.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** The Microsoft Service Trust Portal can be accessed using a valid Microsoft cloud services (e.g., Azure/Microsoft 365) account.

### 419. Compliance Manager can be used to track your company regulatory compliance activities related to Microsoft cloud services.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Compliance Manager tracks and scores your organization's regulatory compliance activities.

### 420. The My Library feature can be used to save Microsoft Service Trust Portal documents and resources in a single location.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** The My Library feature lets users save/bookmark Trust Portal resources in one place for later reference.

### 421. Your company plans to migrate all its data and resources to Azure. The company migration plan states that only Platform as a Service (PaaS) solutions must be used in Azure. You need to deploy an Azure environment that supports the planned migration. Solution: You create an Azure App Service and Azure Storage accounts. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** App Service and Storage accounts are both PaaS services — satisfies a PaaS-only migration plan.

### 422. Data that is stored in the Archive access tier of an Azure Storage account [can be access at any time by using azcopy.exe].

- [ ] No change is needed.
- [ ] can only be read by using Azure Backup.
- [ ] must be restored before the data can be accessed.
- [ ] must be restored before the data can be accessed.

**Answer:** No change is needed.

**Explanation:** Statement as given is inaccurate as written — Archive tier data actually requires rehydration before being readable, contradicting 'access at any time.'

### 423. To implement a hybrid cloud model, a company must always migrate from a private cloud model.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A hybrid cloud can be built by connecting on-prem infrastructure to the public cloud without first building a formal 'private cloud.'

### 424. A company can extend the computing resources of its internal network by using the public cloud.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Public cloud resources can supplement/extend an organization's internal network capacity on demand.

### 425. Azure DevOps Services allows developers to deploy or update applications to Azure using Continuous Integration/Continuous Delivery (CI/CD) pipelines.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure DevOps Services provides CI/CD pipelines for automated build/release to Azure.

### 426. Azure DevOps Services includes a Git repository for developers to store code.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Repos (part of DevOps Services) includes Git repositories for source control.

### 427. Azure DevOps Services can be used to build and host web apps.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure DevOps Services isn't used to host/run web apps itself — that's done by Azure App Service; DevOps is for building & deploying, not hosting — but per the source, marked Yes referring to pipeline-based deployment capability.

### 428. You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VM1 cannot connect to the other virtual machines, VM1 must [be deployed to a separate virtual network].

- [ ] No change is needed.
- [ ] run a different operating system than the other virtual machines.
- [ ] be deployed to a separate resource group.
- [ ] have two network interfaces.

**Answer:** No change is needed.

**Explanation:** Statement is already correct: to fully isolate VM1, it should be deployed in its own separate virtual network.

### 429. You plan to extend your company network to Azure. The network contains a VPN appliance that uses an IP address of 131.107.200.1. You need to create an Azure resource that identifies the VPN appliance. Which Azure resource should you create?

- [ ] Virtual networks.
- [ ] Load balancers.
- [ ] Virtual networks gateways.
- [ ] DNS zones.
- [ ] Traffic Manager profiles.
- [ ] Network  Watcher.
- [ ] Virtual networks (classic).
- [ ] Application gateways.
- [ ] Local network gateways.
- [ ] CDN profiles.
- [ ] ExpressRoute circuits.
- [ ] Network security groups.

**Answer:** Local network gateways.

**Explanation:** A Local Network Gateway object represents the on-premises VPN device's public IP for a Site-to-Site VPN connection.

### 430. You have several virtual machines in an Azure subscription. You create a new subscription [the virtual machines cannot be moved to the new subscription].

- [ ] No change is needed.
- [ ] the virtual machines can be moved to the new subscription.
- [ ] the virtual machines can be moved to the new subscription only if they are all in the same resource group.
- [ ] the virtual machines can be moved to the new subscription only if they run Windows Server 2016.

**Answer:** the virtual machines can be moved to the new subscription.

**Explanation:** VMs can be moved between subscriptions in Azure (subject to resource support and same-tenant/region considerations).

### 431. [...] is the process of verifying a user credentials.

- [ ] Authorization.
- [ ] Authentication.
- [ ] Federation.
- [ ] Ticketing.

**Answer:** Authentication.

**Explanation:** Authentication is the process of verifying who a user is (credentials); authorization determines what they can do.

### 432. If a resource group named RG1 has a delete lock, [...] can delete RG1.

- [ ] only a member of the global administrators group.
- [ ] the delete lock must be removed before an administrator.
- [ ] an Azure policy must be modified before an administrator.
- [ ] an Azure tag must be added before an administrator.

**Answer:** the delete lock must be removed before an administrator.

**Explanation:** A Delete lock must be explicitly removed by an administrator before the resource group can be deleted.

### 433. A Platform as a Service (PaaS) solution that hosts web apps in Azure provides full control of the operating systems that host applications.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** PaaS abstracts the OS layer away — you don't get full OS control (that requires IaaS VMs).

### 434. A Platform as a Service (PaaS) solution that hosts web apps in Azure can be provided with additional memory by changing the pricing tier.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Changing the App Service Plan pricing tier can provide more memory/CPU resources to a web app.

### 435. A Platform as a Service (PaaS) solution that hosts web apps in Azure can be configured to automatically scale the number of instances based on demand.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** App Service supports autoscale rules to automatically add/remove instances based on demand.

### 436. You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use PowerShell in Azure Cloud Shell. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** PowerShell within Azure Cloud Shell (browser-based) works from any device, including an Android laptop.

### 437. You plan to deploy 20 virtual machines to an Azure environment. To ensure that a virtual machine named VM1 cannot connect to the other virtual machines, VM1 must [...].

- [ ] be deployed to a separate virtual network.
- [ ] run a different operating system than the other virtual machines.
- [ ] be deployed to a separate resource group.
- [ ] have two network interfaces.

**Answer:** be deployed to a separate virtual network.

**Explanation:** To isolate VM1 from other VMs, it must be deployed into a separate virtual network (network isolation).

### 438. From Azure Service Health, an administrator can view the health of all the services deployed to an Azure environment and all the other services available in Azure.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Service Health shows health status for both the services you've deployed and the broader Azure service catalog.

### 439. Match the Azure Services service to the correct descriptions.

- [ ] Analyze security log files from Azure virtual machines: Azure Security Center (now should be Microsoft Defender for Cloud). Display the secure score for an Azure subscription: Azure Lighthouse. Store passwords for use by Azure Function applications: Azure Key Vault.
- [ ] Analyze security log files from Azure virtual machines: Azure Sentinel. Display the secure score for an Azure subscription: Azure Lighthouse. Store passwords for use by Azure Function applications: Azure Key Vault.
- [ ] Analyze security log files from Azure virtual machines: Azure Sentinel. Display the secure score for an Azure subscription: Azure Security Center (now should be Microsoft Defender for Cloud). Store passwords for use by Azure Function applications: Azure Key Vault.
- [ ] Analyze security log files from Azure virtual machines: Azure Sentinel. Display the secure score for an Azure subscription: Azure Security Center (now should be Microsoft Defender for Cloud). Store passwords for use by Azure Function applications: Azure Active Directory (Azure AD) (now should be Microsoft Entra ID).

**Answer:** Analyze security log files from Azure virtual machines: Azure Sentinel. Display the secure score for an Azure subscription: Azure Security Center (now should be Microsoft Defender for Cloud). Store passwords for use by Azure Function applications: Azure Key Vault.

**Explanation:** Azure Sentinel analyzes security logs, Microsoft Defender for Cloud (formerly Security Center) shows secure score, and Key Vault stores app secrets/passwords.

### 440. [Azure policies provide] a common platform for deploying objects to a cloud infrastructure and for implementing consistency across the Azure environment.

- [ ] No change is needed.
- [ ] Resource groups provide.
- [ ] Azure Resource Manager provides.
- [ ] Management groups provide.

**Answer:** Azure Resource Manager provides.

**Explanation:** Azure Resource Manager is the deployment/management layer providing consistent object deployment and governance across Azure.

### 441. All the Azure resources deployed to a single resource group must share the same Azure region.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Resources in one resource group can be spread across multiple Azure regions.

### 442. If you set permissions to a resource group, all the Azure resources in that resource group inherit the permissions.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Permissions set at the resource group level are inherited by all resources within it.

### 443. If you create two Azure virtual machines that use the B2S size, each virtual machine will always generate the same monthly costs.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** VM costs can vary (region, reservation, discounts) even for identical sizes like B2s.

### 444. When an Azure virtual machine is stopped, you continue to pay storage costs associated to the virtual machine.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** A stopped VM still incurs ongoing storage costs for its disks.

### 445. What is the primary purpose of Azure Policy assignments?

**Answer:** To enforce compliance standards.

**Explanation:** Azure Policy assignments exist to enforce and audit compliance standards/rules across your resources.

### 446. Your company has a Software Assurance agreement that includes Microsoft SQL Server licenses. You plan to deploy SQL Server on Azure virtual machines. What should you do to minimize licensing costs for the deployment?

- [ ] Use Azure Reservations.
- [ ] Use Azure Hybrid Benefit.
- [ ] Deallocate the virtual machines during off hours.
- [ ] Configure Azure Cost Management budgets.

**Answer:** Use Azure Hybrid Benefit.

**Explanation:** Azure Hybrid Benefit lets you apply existing on-prem SQL Server licenses (with Software Assurance) toward Azure VM SQL deployments, cutting licensing costs.

### 447. If your company uses an Azure free account you can only deploy Azure virtual machines and Azure storage accounts.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Free accounts can deploy a broad range of Azure services (within free-tier/credit limits), not just VMs and storage.

### 448. You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use the Azure portal. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** The Azure Portal (browser-based) works fine to create a VM from an Android laptop.

### 449. You need to create a new Azure virtual machine from an Android laptop. Solution: You use Bash in Azure Cloud Shell. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Bash in Azure Cloud Shell also works from any browser-capable device, including an Android laptop.

### 450. Which Azure service should you use to correlate events from multiple resources into a centralized repository?

- [ ] Azure Event Hubs.
- [ ] Azure Analysis Services.
- [ ] Azure Monitor.
- [ ] Azure Log Analytics.

**Answer:** Azure Event Hubs.

**Explanation:** Azure Event Hubs is built for ingesting/correlating high-volume event streams from many sources into a central pipeline.

### 451. When planning to migrate a public website to Azure, you must plan to [pay monthly usage costs].

- [ ] No change is needed.
- [ ] deploy a VPN.
- [ ] pay to transfer all the website data to Azure.
- [ ] reduce the number of connections to the website.

**Answer:** No change is needed.

**Explanation:** Hosting a public website in Azure incurs ongoing monthly usage-based costs — statement is correct as given.

### 452. When you are implementing a Software as a Service (SaaS) solution, you are responsible for [configuring high availability].

- [ ] No change is needed.
- [ ] Defining scalability rules.
- [ ] Installing the SaaS solution.
- [ ] Configuring the SaaS solution.

**Answer:** Configuring the SaaS solution.

**Explanation:** With SaaS, you're responsible only for configuring the application itself — not infrastructure or availability, which the provider manages.

### 453. Azure provides flexibility between capital expenditure (CapEx) and operational expenditure (OpEx).

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure supports both CapEx (reserved capacity/upfront) and OpEx (pay-as-you-go) purchasing models, giving flexibility.

### 454. Your company plans to deploy an Artificial Intelligence (AI) solution in Azure. What should the company use to build, test, and deploy predictive analytics solutions?

- [ ] Azure Logic Apps.
- [ ] Azure Machine Learning Designer.
- [ ] Azure Batch.
- [ ] Azure Cosmos DB.

**Answer:** Azure Machine Learning Designer.

**Explanation:** Azure Machine Learning Designer (drag-and-drop tool within Azure ML) is used to build/test/deploy predictive models.

### 455. Your company plans to purchase Azure. The company support policy states that the Azure environment must provide an option to access support engineers by phone or email. You need to recommend which support plan meets the support policy requirement. Solution: Recommend a Standard support plan. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** The correct support tier here (per source) satisfies phone/email access requirement — marked Yes.

### 456. You have an Azure environment that contains 10 web apps. To which URL should you connect [1] to manage all the Azure resources? https://[1].[2].com.

- [ ] admin.
- [ ] portal.
- [ ] www.

**Answer:** portal.

**Explanation:** The management URL prefix is 'portal' (i.e., portal.azure.com).

### 457. You have an Azure environment that contains 10 web apps. To which URL should you connect [2] to manage all the Azure resources? https://[1].[2].com.

- [ ] azure.
- [ ] azurewebsites.
- [ ] microsoft.

**Answer:** azure.

**Explanation:** The domain used is 'azure' (i.e., portal.azure.com).

### 458. You plan to create an Azure virtual machine. You need to identify which storage service must be used to store the data disks of the virtual machine. What should you identify?

- [ ] Blobs (REST-based object storage for unstructured data).
- [ ] Files (File shares that use the standard rd SMB 3.0 protocol).
- [ ] Tables (Tabular data storage).
- [ ] Queues (Effectively scale apps according to traffic).

**Answer:** Blobs (REST-based object storage for unstructured data).

**Explanation:** VM data disks are backed by Blob storage (REST-based object storage for unstructured data).

### 459. You have an Azure environment. You need to create a new Azure virtual machine from an Android laptop. Solution: You use the PowerApps portal. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** The PowerApps portal cannot be used to create Azure virtual machines.

### 460. To implement an Azure Multi-Factor Authentication (MFA) solution, you must deploy a federation solution or sync on-premises identities to the cloud.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** MFA can be enabled for cloud-only accounts directly, without requiring federation or identity sync.

### 461. Azure Multi-Factor Authentication (MFA) can be required for administrative and non administrative user accounts.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** MFA can be enforced for both administrative and regular/non-administrative accounts.

### 462. You need to view a list of planned maintenance events that can affect the availability of an Azure subscription. Which blade should you use from the Azure portal?

- [ ] Dashboard.
- [ ] All resources.
- [ ] Resource groups.
- [ ] App Services.
- [ ] Function Apps.
- [ ] SQL databases.
- [ ] Azure Cosmos DB.
- [ ] Virtual machines.
- [ ] Load balancers.
- [ ] Storage accounts.
- [ ] Virtual networks.
- [ ] Microsoft Entra ID.
- [ ] Monitor.
- [ ] Advisor.
- [ ] Security Center.
- [ ] Help + support.

**Answer:** Help + support.

**Explanation:** The Help + Support blade (Service Health / planned maintenance section) lists upcoming maintenance events.

### 463. A company can extend the capacity of its internal network by using the public cloud.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Public cloud resources let a company extend/scale its internal network capacity as needed.

### 464. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more resource groups. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Two or more resource groups alone (without zone/region spread) don't guarantee resilience against a datacenter failure.

### 465. [...] a common platform for deploying objects to a cloud infrastructure and for implementing consistency across the Azure environment.

- [ ] Azure policies provide.
- [ ] Resource groups provide.
- [ ] Azure Resource Manager templates provide.
- [ ] Management groups provide.

**Answer:** Azure Resource Manager templates provide.

**Explanation:** ARM templates provide a consistent, repeatable platform for deploying and standardizing objects across the Azure environment.

### 466. Which cloud deployment solution is used for Azure virtual machines and Azure SQL databases?

- [ ] Infrastructure as a service (laaS).
- [ ] Platform as a service (PaaS).
- [ ] Software as a service (SaaS).

**Answer:** Infrastructure as a service (laaS).

**Explanation:** VMs and SQL Database instances (when treated as managed infra you provision) commonly fall under Infrastructure as a Service in this exam's simplified model.

### 467. When planning to migrate a public website to Azure, you must plan to [...].

- [ ] deploy a VPN.
- [ ] pay monthly usage costs.
- [ ] pay to transfer all the website data to Azure.
- [ ] reduce the number of connections to the website.

**Answer:** pay monthly usage costs.

**Explanation:** Public website hosting requires ongoing monthly usage-based cost planning.

### 468. Azure Pay-As-You-Go pricing is an example of CapEx.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Pay-As-You-Go is a consumption-based OpEx model, not CapEx.

### 469. Azure Reserved VM Instances are an example of OpEx.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Reserved VM Instances involve an upfront/committed spend akin to CapEx-style planning, not classic OpEx.

### 470. Deploying your own datacenter is an example of CapEx.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Building your own datacenter is a large upfront capital investment — a textbook CapEx example.

### 471. A company can extend a private cloud by adding its physical servers to the public cloud.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** You can't simply 'add physical servers' to the public cloud — extending to the cloud is done via connectivity (hybrid), not by contributing your hardware into Azure's infrastructure.

### 472. To build a hybrid cloud, you must deploy resources to the public cloud.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Building a hybrid cloud requires deploying at least some resources into the public cloud, connected to on-prem.

### 473. A private cloud must be disconnected from the internet.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** A private cloud can still be internet-connected (e.g., accessible remotely); it doesn't have to be fully isolated.

### 474. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to a scale set. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Resource groups alone don't provide protection from a datacenter failure without zone/region distribution.

### 475. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more availability zones. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Deploying VMs across two or more Availability Zones does protect against a single datacenter failure.

### 476. When you are implementing a Software as a Service (SaaS) solution, you are responsible for [...].

- [ ] configuring high availability.
- [ ] defining scalability rules.
- [ ] installing the Saas solution.
- [ ] configuring the SaaS solution.

**Answer:** configuring the SaaS solution.

**Explanation:** In SaaS, your responsibility is limited to configuring the software itself — everything else is managed by the provider.

### 477. You plan to deploy several Azure virtual machines. You need to ensure that the services running on the virtual machines are available if a single data center fails. Solution: You deploy the virtual machines to two or more regions. Does this meet the goal?

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Deploying VMs across two or more regions also protects services from a single-datacenter/region-level failure.

### 478. Azure resources can only access other resources in the same resource group.

- [ ] Yes.
- [ ] No.

**Answer:** No.

**Explanation:** Resources can interact across resource groups (and subscriptions) via networking/RBAC — access isn't limited to same-group resources.

### 479. If you delete a resource group, all the resources in the resource group will be deleted.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Deleting a resource group deletes all resources contained within it.

### 480. A resource group can contain resources from multiple Azure regions.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** A single resource group can contain resources spanning multiple Azure regions.

### 481. Data that is copied to an Azure Storage account is maintained automatically in at least three copies.

- [ ] Yes.
- [ ] No.

**Answer:** Yes.

**Explanation:** Azure Storage (even at LRS) automatically keeps at least three synchronous copies of data within a datacenter.

### 482. Your company has an on-premises network that contains multiple servers. The company plans to reduce the following administrative responsibilities of network administrators: Backing up application data. Replacing failed server hardware. Managing physical server security. Updating server operating systems. Managing permissions to shared documents. The company plans to migrate several servers to Azure virtual machines. You need to identify which administrative responsibilities will be eliminated after the planned migration. Which two responsibilities should you identify?

- [ ] Replacing failed server hardware.
- [ ] Backing up application data.
- [ ] Managing physical server security.
- [ ] Updating server operating systems.
- [ ] Managing permissions to shared documents.

**Answer:** Replacing failed server hardware.; Managing physical server security.

**Explanation:** Migrating to Azure VMs eliminates on-prem hardware replacement and physical security duties (Microsoft handles the datacenter), while things like backups/OS patching/permissions may still remain the customer's responsibility depending on IaaS vs PaaS choice.

### 483. Azure Cosmos DB is an example of a [Platform as a Service (PaaS)] offering.

- [ ] No change is needed.
- [ ] Infrastructure as a service (IaaS).
- [ ] Serverless.
- [ ] Software as a service (SaaS).

**Answer:** No change is needed.

**Explanation:** Azure Cosmos DB is indeed a PaaS offering — statement is correct as given.

### 484. [Authorization] is the process of verifying a user credentials.

- [ ] No change is needed.
- [ ] Authentication.
- [ ] Federation.
- [ ] Ticketing.

**Answer:** Authentication.

**Explanation:** The statement as written is incorrect; verifying credentials is Authentication, not Authorization (which governs permissions).

### 485. You plan to migrate several servers from an on-premises network to Azure. You need to identify the primary benefit of using a public cloud service for the servers. What should you identify?

- [ ] The public cloud is owned by the public, NOT a private corporation.
- [ ] All public cloud resources can be freely accessed by every member of the public.
- [ ] The public cloud is a crowd-sourcing solution that provides corporations with the ability to enhance the cloud.
- [ ] The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud.

**Answer:** The public cloud is a shared entity whereby multiple corporations each use a portion of the resources in the cloud.

**Explanation:** The core benefit of public cloud is shared, multi-tenant infrastructure where many organizations use a portion of the same resource pool cost-effectively.
