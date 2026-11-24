export type SvgNode = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub: string;
  stroke: string;
  text: string;
};

export type Project = {
  slug: string;
  code: string;
  title: string;
  domain: string;
  cloud: string;
  categories: string[];
  metric: string;
  summary: string;
  challenge: string;
  architecture: string;
  outcome: string;
  stack: string[];
  diagramTitle: string;
  nodes: SvgNode[];
  edges: [number, number, number, number][];
  links?: { label: string; href: string }[];
};

export const BASE = '/portfolio';

export const withBase = (path: string) => {
  if (!path || path.startsWith('http') || path.startsWith('mailto:')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}`;
};

export const site = {
  name: 'Nagabairu Manoj',
  shortName: 'MANOJ',
  role: 'Lead Cloud, DevOps & FinOps Architect',
  url: 'https://nagabairumanoj.github.io/portfolio',
  description:
    'Lead Cloud, DevOps and SRE Architect delivering Tri-Cloud (AWS, Azure, GCP) and Sovereign Cloud systems across 15+ enterprise engagements.',
  email: 'manojnagabairu@gmail.com',
  location: 'Hyderabad, Telangana, India (Open to Remote)',
  resumePath: '/nagabairu_manoj.pdf',
  company: {
    name: 'Bluetris Technologies Pvt. Ltd.',
    role: 'Lead Cloud & DevOps Engineer',
    period: 'May 2023 to Present',
    scope: '15+ enterprise consulting engagements across India, APAC, and global accounts',
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nagabairu-manoj/' },
    { label: 'GitHub', href: 'https://github.com/NagabairuManoj' },
    { label: 'AI-SRE Live', href: 'https://pipeline-agent.tech/' },
  ],
  certifications: [
    { name: 'Red Hat Certified System Administrator (RHCSA)', detail: 'Credential ID: 220-129-852' },
    { name: 'Microsoft Certified: Azure Administrator Associate', detail: 'AZ-104' },
    { name: 'Microsoft Certified: Azure Fundamentals', detail: 'AZ-900' },
  ],
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Amity University, Jaipur',
    period: '2019 to 2023',
    score: '9.3 / 10.0 CGPA',
  },
  kpis: [
    { value: '15+', label: 'Enterprise Systems', note: 'Bluetris Consulting (2023 to Present)', signal: false },
    { value: '79%', label: 'GCP Compute Cut', note: '$158.4K/yr saved across 110+ nodes', signal: true },
    { value: 'INR 2.06 Cr', label: 'Azure FinOps Roadmap', note: 'INR 21.5L/yr zero-downtime savings', signal: true },
    { value: '97.5%', label: 'BigQuery Query Cut', note: '$12,000/mo down to $300/mo', signal: true },
    { value: '1,300+', label: 'Repos Governed', note: 'Apiiro ASPM, Snyk, rootless AKS', signal: false },
    { value: '<= 15m RPO', label: 'Multi-Region DR', note: '4.5M+ req/mo, RTO <= 2 hours', signal: false },
  ],
  capabilities: [
    {
      num: '01',
      title: 'Tri-Cloud & Sovereign Landing Zones',
      text: 'Designed multi-subscription Azure Landing Zones, air-gapped 4-VPC custom networks, NIC Meghraj sovereign clusters, and dual-region GCP Hub-and-Spoke DR topologies.',
    },
    {
      num: '02',
      title: 'Data-Driven Cloud Economics (FinOps)',
      text: 'Turned raw telemetry (874K+ Cloud Monitoring lines, Azure KQL Resource Graph, BigQuery slot scans) into verified 79% to 97.5% spend reductions without sacrificing SLAs.',
    },
    {
      num: '03',
      title: 'Kubernetes, Istio & Ingress Engineering',
      text: 'Operated production EKS, GKE, AKS, and bare containerd clusters with Argo CD GitOps, Helm, Istio Internal Load Balancers, and per-IP HTTP 429 rate limiting.',
    },
    {
      num: '04',
      title: 'DevSecOps & Zero-SSH Compliance',
      text: 'Governed security across 1,300+ GitHub repositories with Apiiro and Snyk, eliminated Port 22 SSH via AWS SSM, isolated secrets in Vault, and stripped root pod privileges.',
    },
    {
      num: '05',
      title: 'IaC, CI/CD & Blue-Green Releases',
      text: 'Built modular 7-layer AWS CloudFormation stacks, Terraform HCL modules, GitHub Actions ARC, GitLab DinD test harnesses, CloudBees Jenkins, and Harness Blue-Green pipelines.',
    },
    {
      num: '06',
      title: 'AI Infrastructure, Observability & SRE',
      text: 'Right-sized 38-node Data Science Kubernetes clusters on Spot pools, integrated Prometheus/Grafana/Datadog/SigNoz APM, and built pipeline-agent.tech for automated CI remediation.',
    },
  ],
  toolset: [
    {
      category: 'AI & ML Infrastructure',
      items: [
        'Kubernetes AI/ML Workloads (GKE, ECS)',
        'Gemini 2.5 Flash API',
        'PyGithub Automation',
        'Token & Credit Optimization',
        'Spot VM Batch Autoscaling',
        'Airflow & BigQuery ML Pipelines',
      ],
    },
    {
      category: 'Cloud & Sovereign',
      items: [
        'Amazon Web Services (AWS)',
        'Microsoft Azure (AZ-104)',
        'Google Cloud Platform (GCP)',
        'NIC Meghraj Sovereign Cloud',
        'Azure Landing Zone (ALZ)',
        'Custom VPC, NAT & PrivateLink',
      ],
    },
    {
      category: 'Containers & Mesh',
      items: [
        'Amazon EKS & ECS',
        'Google Kubernetes Engine (GKE)',
        'Azure Kubernetes Service (AKS)',
        'Docker & containerd',
        'Helm & Argo CD GitOps',
        'Istio ILB & Ingress-Nginx',
      ],
    },
    {
      category: 'Infrastructure as Code',
      items: [
        'Terraform',
        'AWS CloudFormation (7-Layer)',
        'Ansible',
        'Azure Resource Graph (KQL)',
        'AWS Systems Manager (SSM)',
      ],
    },
    {
      category: 'CI/CD Delivery',
      items: [
        'GitHub Actions & Self-Hosted ARC',
        'GitLab CI/CD (EC2 DinD)',
        'CloudBees & Jenkins',
        'Harness CD (Blue-Green)',
        'AWS CodeBuild & ECR',
        'Azure DevOps & Cloud Build',
      ],
    },
    {
      category: 'DevSecOps & Governance',
      items: [
        'Apiiro ASPM',
        'Snyk & SonarQube',
        'HashiCorp Vault (Shamir)',
        'AWS WAF & Cloud Armor',
        'AWS IAM Federation & PassRole',
        'Rapid7 CloudTrail SIEM',
      ],
    },
    {
      category: 'Observability & SRE',
      items: [
        'Prometheus & Alertmanager',
        'Grafana & Micrometer',
        'Datadog (7d/30d Capacity)',
        'SigNoz & ELK / Loki',
        'AWS CloudWatch & EventBridge',
        'Lambda ChatOps (Google Chat)',
      ],
    },
    {
      category: 'Data, Cache & Scripting',
      items: [
        'PostgreSQL HA, WAL & PgBouncer',
        'MongoDB Replica Sets',
        'Redis Cluster & Memorystore',
        'Apache Kafka & Event Hubs',
        'BigQuery, Snowflake & Synapse',
        'Python 3 (FastAPI, Django, Boto3)',
      ],
    },
  ],
};

export const projects: Project[] = [
  {
    slug: 'gcp-finops-modernization',
    code: 'PRJ-01',
    title: 'GCP FinOps & 4-VPC Air-Gapped Modernization',
    domain: 'Telecom Digital Media Platform',
    cloud: 'GCP',
    categories: ['finops', 'gcp', 'k8s', 'ai'],
    metric: '79% Cost Cut | $158.4K/yr Saved',
    summary:
      'Parsed 874K+ telemetry lines across 110+ GKE nodes and a 38-node Data Science cluster, slashing compute burn 79% and isolating 4 custom VPCs around 1.7TB MongoDB.',
    challenge:
      'Production infrastructure spanned 110+ GKE nodes, 7 MongoDB VMs (288 vCPU, 1.7TB data), 50GB HA Redis, and 66 Cloud Functions costing $16,638/month on flat networks that exposed over 100 worker node public IPs and open 0.0.0.0/0 Master API access.',
    architecture:
      'Engineered custom Python parsing over 874,716 Google Cloud Monitoring telemetry lines, proving a 38-node Data Science batch cluster sat 98.4% idle (shifted to Spot VM pools) and exposing a locked pool-4/pool-6 min-node=10 autoscaler bug (Staging cut 21 to 4 nodes). Segmented networks into 4 air-gapped custom VPCs (vpc-prod 10.100/16, vpc-staging 10.110/16, vpc-ds 10.120/16, vpc-hub 10.130/24) with fixed-IP Cloud NAT, SigNoz, and a zero-downtime live MongoDB rs.stepDown() migration plan.',
    outcome:
      'Cut monthly GCP compute spend by 79% ($16,638/mo down to $3,405/mo, ~$158,400/year saved) while enforcing zero public worker node IPs.',
    stack: [
      'Google Cloud Platform',
      'GKE & Spot Node Pools',
      'MongoDB (1.7TB Replica Sets)',
      'Redis HA (50GB)',
      'Custom VPC & Cloud NAT',
      'SigNoz',
      'Cloud Functions',
      'FinOps',
    ],
    diagramTitle: '4 AIR-GAPPED CUSTOM VPCS + 1.7TB MONGODB CUTOVER',
    nodes: [
      { x: 14, y: 18, w: 144, h: 50, title: 'vpc-prod', sub: '10.100/16 GKE+DB', stroke: '#34D399', text: '#34D399' },
      { x: 170, y: 18, w: 144, h: 50, title: 'vpc-ds (Spot)', sub: '10.120/16 38 Nodes', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 326, y: 18, w: 144, h: 50, title: 'vpc-staging', sub: '10.110/16 21->4 Node', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 482, y: 18, w: 144, h: 50, title: 'vpc-hub', sub: '10.130/24 SigNoz/CI', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 28, y: 112, w: 274, h: 54, title: '7 MongoDB VMs (288 vCPU / 1.7TB)', sub: 'Live Cross-VPC rs.stepDown() Sync', stroke: '#60A5FA', text: '#60A5FA' },
      { x: 334, y: 112, w: 278, h: 54, title: '79% Spend Cut ($16.6K -> $3.4K)', sub: 'Zero Public Node IPs + Cloud NAT', stroke: '#34D399', text: '#34D399' },
    ],
    edges: [[86, 68, 165, 112], [242, 68, 200, 112], [398, 68, 455, 112], [554, 68, 505, 112]],
  },
  {
    slug: 'azure-landing-zone-finops',
    code: 'PRJ-02',
    title: 'Enterprise Azure FinOps & Landing Zone Governance',
    domain: 'Large-Scale EdTech Platform',
    cloud: 'Azure',
    categories: ['finops', 'azure', 'k8s', 'ai'],
    metric: 'INR 2.06 Cr Roadmap | INR 21.5L/yr Saved',
    summary:
      'Audited 357+ pre-prod resources across a 10-subscription Azure Landing Zone via KQL and 30-day P95 metrics, delivering immediate zero-downtime savings and Strimzi/Event Hubs redesigns.',
    challenge:
      'Monthly pre-prod and shared Azure spend across 10 subscriptions reached INR 27,25,978/month (~INR 3.27 Cr/year) due to oversized Redis P3 clusters, idle 9-node HDInsight Kafka clusters at 4.1% CPU, over-provisioned Event Hubs, unused PostgreSQL replicas, and orphaned disks and IPs.',
    architecture:
      'Ran an automated Azure Resource Graph (KQL) and Azure Monitor 30-day P95 audit across 11 infrastructure pillars under strict P95 < 60% CPU and 25 to 30% RAM headroom rules. Executed immediate cuts on Redis (P3 26GB to P1 6GB), decommissioned an 8-vCPU/1TB PostgreSQL flexible replica alongside PgBouncer connection pooling, and removed 8 orphan RSV backups, 9 unattached public IPs, 3 orphan AKS disks, and idle POC VMs. Designed migrations for HDInsight to AKS Strimzi KRaft, Event Hubs (<2.5 KB/s) to 1 TU Auto-Inflate, and GRS to LRS backup vaults.',
    outcome:
      'Realized INR 1,79,190/month (INR 21.50 Lakhs/year) in immediate zero-downtime savings and established a validated INR 2.06 Cr/year (63%) cost optimization roadmap.',
    stack: [
      'Microsoft Azure',
      'Azure Landing Zone',
      'Azure Resource Graph (KQL)',
      'AKS & Strimzi Kafka',
      'PostgreSQL Flexible',
      'PgBouncer',
      'Azure Cache Redis',
      'Event Hubs',
      'Azure Monitor',
    ],
    diagramTitle: '10-SUBSCRIPTION AZURE LANDING ZONE (11 FINOPS PILLARS)',
    nodes: [
      { x: 16, y: 18, w: 186, h: 52, title: '10 Azure Subscriptions', sub: '2,241 Prod / 357 Audit', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 226, y: 18, w: 188, h: 52, title: 'KQL Resource Graph', sub: '30d P95 < 60% CPU Rule', stroke: '#60A5FA', text: '#60A5FA' },
      { x: 438, y: 18, w: 186, h: 52, title: 'INR 21.50L/yr Realized', sub: 'Zero-Downtime Cuts', stroke: '#34D399', text: '#34D399' },
      { x: 16, y: 114, w: 192, h: 54, title: 'Redis P3->P1 & PG Decom', sub: '8-vCPU Removed + PgBouncer', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 226, y: 114, w: 188, h: 54, title: 'HDInsight 4.1% -> KRaft', sub: 'Strimzi + EventHub 1 TU', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 434, y: 114, w: 190, h: 54, title: 'Vault GRS -> LRS (60.8%)', sub: 'Orphan RSV/IP/Disk Purge', stroke: '#34D399', text: '#34D399' },
    ],
    edges: [[202, 44, 226, 44], [414, 44, 438, 44], [320, 70, 112, 114], [320, 70, 320, 114], [320, 70, 529, 114]],
  },
  {
    slug: 'sovereign-cloud-exam-migration',
    code: 'PRJ-03',
    title: 'Sovereign Cloud Migration & High-Concurrency Exam Engine',
    domain: 'Apex Government Examination Platform',
    cloud: 'NIC Meghraj',
    categories: ['gcp', 'k8s', 'secops'],
    metric: 'Zero-Downtime | 20/200/400 RPM WAF',
    summary:
      'Executed zero-downtime migration from Azure onto air-gapped Sovereign Cloud across dual 8-node K8s clusters with Harbor TLS trust, Ingress-Nginx rate limiting, and Prometheus APM.',
    challenge:
      'National examination workloads needed to move off public cloud (Azure 10.18.0.0/16) into India air-gapped Sovereign Cloud (NIC Meghraj 10.200.0.0/16) while absorbing massive concurrent exam traffic spikes and fixing pre-cutover Redis Cluster and HTTP 500 masking bugs.',
    architecture:
      'Standing up dual 8-node Kubernetes clusters (Prod/UAT), I built air-gapped Gitea repository mirroring, Harbor private container registries with custom CA TLS trust distributed across all 8 containerd worker nodes, and <3-min Jenkins multibranch CI/CD pipelines across 5 microservices (Java 21 Spring Boot, Undertow, Python Flask, Angular, EKSM KMS). Fixed standalone Redis client calls failing CLUSTER SLOTS, converted client-IP exception throws from false HTTP 500s to clean HTTP 200 fallbacks, and enforced per-IP leaky-bucket Ingress-Nginx rate limiting (20/200/400 RPM returning HTTP 429) with Prometheus/Grafana APM.',
    outcome:
      'Completed regulatory sovereign cutover with zero downtime, sub-3-minute CI/CD build parity, and resilient traffic shielding during national exams.',
    stack: [
      'NIC Meghraj Sovereign Cloud',
      'Kubernetes (containerd)',
      'Gitea & Harbor Registry',
      'Jenkins Multibranch',
      'Ingress-Nginx (HTTP 429)',
      'Java 21 Spring Boot',
      'Python Flask',
      'Redis Cluster',
      'Prometheus & Grafana',
    ],
    diagramTitle: 'AZURE TO SOVEREIGN CLOUD DUAL 8-NODE AIR-GAPPED K8S',
    nodes: [
      { x: 14, y: 18, w: 142, h: 50, title: 'Gitea + Jenkins', sub: '<3m Air-Gapped CI', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 170, y: 18, w: 148, h: 50, title: 'Harbor Private Reg', sub: 'containerd CA TLS', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 332, y: 18, w: 152, h: 50, title: 'Ingress-Nginx WAF', sub: '20/200/400 RPM->429', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 498, y: 18, w: 128, h: 50, title: 'Prometheus APM', sub: 'Grafana+Alertmgr', stroke: '#34D399', text: '#34D399' },
      { x: 18, y: 112, w: 294, h: 54, title: 'Dual 8-Node K8s (Prod/UAT 10.200/16)', sub: 'Java 21 Spring, Undertow, Flask, Angular', stroke: '#60A5FA', text: '#60A5FA' },
      { x: 332, y: 112, w: 294, h: 54, title: 'Redis Cluster Slots + EKSM KMS', sub: 'False-500 Fixed -> HTTP 200 Fallback', stroke: '#34D399', text: '#34D399' },
    ],
    edges: [[156, 43, 170, 43], [318, 43, 332, 43], [484, 43, 498, 43], [408, 68, 479, 112], [244, 68, 165, 112]],
  },
  {
    slug: 'day0-aws-cloudformation-ssm',
    code: 'PRJ-04',
    title: 'Day-0 7-Layer AWS CloudFormation & Zero-SSH Platform',
    domain: 'Enterprise Logistics Platform',
    cloud: 'AWS',
    categories: ['aws', 'secops'],
    metric: '7-Layer IaC | Port 22 Eliminated',
    summary:
      'Engineered greenfield AWS landing zone across 7 decoupled CloudFormation templates with GitLab Two-Role PassRole CI/CD, AWS SSM zero-SSH access, and Lambda ChatOps alerts.',
    challenge:
      'A growing logistics platform required full AWS infrastructure built from Day-0 with modular change isolation, zero console drift, zero open SSH ports or bastion hosts, and automated CI/CD for frontend and backend services.',
    architecture:
      'Authored 7 decoupled AWS CloudFormation stacks: (1) VPC/Subnets/NAT, (2) Chained Security Groups, (3) Private RDS PostgreSQL & Redis, (4) ECS/EC2 Auto Scaling + ALB + SQS/Lambda, (5) S3 + CloudFront + Cognito + WAF, (6) AWS CodeBuild + ECR, and (7) Route 53 + CloudWatch. Wired GitLab CI/CD using a least-privilege Two-Role PassRole model, automated CloudFront /* invalidations, replaced Port 22 SSH completely with AWS Systems Manager (SSM Run Command & Session Manager), and piped CloudWatch/SNS events via Lambda to Google Chat.',
    outcome:
      'Shipped 100% reproducible Day-0 AWS infrastructure passing strict zero-SSH security audits with rapid ChatOps incident visibility.',
    stack: [
      'AWS CloudFormation',
      'Amazon VPC & ALB',
      'Amazon ECS & EC2',
      'RDS PostgreSQL',
      'AWS SSM (Zero-SSH)',
      'CloudFront & AWS WAF',
      'Cognito & Route 53',
      'CodeBuild & ECR',
      'AWS Lambda & SNS',
      'GitLab CI/CD',
    ],
    diagramTitle: '7-LAYER MODULAR CLOUDFORMATION + SSM ZERO-SSH',
    nodes: [
      { x: 16, y: 18, w: 148, h: 50, title: 'GitLab Two-Role CI', sub: 'CFN Lint & PassRole', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 184, y: 18, w: 222, h: 50, title: '7 Decoupled CFN Stacks', sub: 'VPC / SG / RDS / ALB / WAF', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 426, y: 18, w: 198, h: 50, title: 'CloudFront+Cognito', sub: 'WAF + /* Invalidation', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 24, y: 112, w: 278, h: 54, title: 'AWS SSM Session + Run Command', sub: 'SSH Port 22 Totally Removed', stroke: '#34D399', text: '#34D399' },
      { x: 332, y: 112, w: 284, h: 54, title: 'CloudWatch + SNS + Lambda Bot', sub: 'CodeBuild/ECR -> Google Chat', stroke: '#60A5FA', text: '#60A5FA' },
    ],
    edges: [[164, 43, 184, 43], [406, 43, 426, 43], [295, 68, 163, 112], [295, 68, 474, 112]],
  },
  {
    slug: 'banking-bigquery-finops-sre',
    code: 'PRJ-05',
    title: 'BigQuery Observability FinOps & Banking Data SRE',
    domain: 'Tier-1 Multinational Bank',
    cloud: 'GCP',
    categories: ['finops', 'gcp', 'ai'],
    metric: '97.5% BigQuery Cut | $12K -> $300/mo',
    summary:
      'Cut Central Grafana BigQuery observability spend by 97.5% while maintaining 35+ commercial-lending Apache Airflow DAGs, GCS landing workflows, and Terraform pipelines under banking SLAs.',
    challenge:
      'Full-table unpartitioned BigQuery queries driving Central Grafana dashboards burned $12,000/month, while 35+ business-critical commercial banking ingestion models required strict on-call reliability.',
    architecture:
      'Re-engineered Central Grafana BigQuery SQL panels using date partitioning and column clustering to eliminate wasteful scans. Triaged Apache Airflow DAG partition anomalies and upstream Google Cloud Storage (GCS) landing lag across 8 HIST + 27 BB pipelines during 3-team SRE rotations, and automated dataset and IAM provisioning through Terraform, Google Cloud Build, and ServiceNow FDR change governance.',
    outcome:
      'Reduced monthly BigQuery observability spend by 97.5% ($12,000/month down to $300/month) while preserving strict SLA compliance across 35+ financial data pipelines.',
    stack: [
      'GCP',
      'Google BigQuery',
      'Apache Airflow (35+ DAGs)',
      'Grafana',
      'Google Cloud Storage',
      'Terraform',
      'Cloud Build',
      'Cloud IAM',
      'ServiceNow FDR',
    ],
    diagramTitle: 'BANKING DATA SRE + BIGQUERY PARTITIONING FINOPS',
    nodes: [
      { x: 16, y: 18, w: 174, h: 50, title: '35+ Banking DAGs', sub: '8 HIST + 27 BB Models', stroke: '#60A5FA', text: '#60A5FA' },
      { x: 224, y: 18, w: 192, h: 50, title: 'Apache Airflow + GCS', sub: 'Lag & Partition Triage', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 448, y: 18, w: 176, h: 50, title: 'BigQuery Partitioned', sub: '$12,000 -> $300/mo', stroke: '#34D399', text: '#34D399' },
      { x: 38, y: 112, w: 266, h: 54, title: 'Terraform IaC + Cloud Build', sub: 'Datasets, IAM & UT/SIT Deploys', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 334, y: 112, w: 268, h: 54, title: 'Central Grafana + ServiceNow', sub: '3-Team Rotation SLA Control', stroke: '#FBBF24', text: '#FBBF24' },
    ],
    edges: [[190, 43, 224, 43], [416, 43, 448, 43], [536, 68, 468, 112], [171, 68, 171, 112]],
  },
  {
    slug: 'enterprise-devsecops-1300-repos',
    code: 'PRJ-06',
    title: 'Enterprise DevSecOps Governance Across 1,300+ Repos',
    domain: 'Global Fortune 500 FMCG Enterprise',
    cloud: 'Azure',
    categories: ['secops', 'azure', 'k8s'],
    metric: '1,300+ Repos Secured | Rootless AKS',
    summary:
      'Governed AppSec posture across 1,300+ GitHub repositories with Apiiro ASPM and Snyk, deployed self-hosted GitHub Actions ARC runners on AKS, and stripped root container permissions.',
    challenge:
      'Security risk spanned over 1,300 polyglot GitHub repositories (Python, Node.js, frontend) with legacy plaintext workflow tokens, privileged root containers running in AKS, and limited namespace resource forecasting.',
    architecture:
      'Operationalized Apiiro ASPM and Snyk (SAST/SCA) vulnerability remediation across enterprise repositories, migrated exposed credentials into encrypted GitHub Actions Secrets, deployed scalable self-hosted GitHub Actions Runner Controller (ARC) fleets inside private Azure Kubernetes Service (AKS) clusters, removed privileged: true and root user specs across pod manifests, and created Datadog 7-day and 30-day namespace capacity reports.',
    outcome:
      'Closed critical secret and root-escalation exposure across 1,300+ repositories while giving platform teams clear 7d/30d Datadog cluster capacity visibility.',
    stack: [
      'GitHub Actions & Self-Hosted ARC',
      'Microsoft Azure AKS',
      'Apiiro ASPM',
      'Snyk',
      'Datadog',
      'Non-Root Container Hardening',
      'Python & Node.js',
    ],
    diagramTitle: 'SUPPLY-CHAIN ASPM + SELF-HOSTED ARC ON ROOTLESS AKS',
    nodes: [
      { x: 16, y: 18, w: 180, h: 50, title: '1,300+ GitHub Repos', sub: 'Python / Node.js / Web', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 224, y: 18, w: 188, h: 50, title: 'Apiiro ASPM + Snyk', sub: 'SAST/SCA + Secrets Purge', stroke: '#FB7185', text: '#FB7185' },
      { x: 438, y: 18, w: 186, h: 50, title: 'GitHub Actions ARC', sub: 'Private AKS Runners', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 34, y: 112, w: 274, h: 54, title: 'Hardened Production AKS Pods', sub: 'privileged:false & Non-Root Enforced', stroke: '#34D399', text: '#34D399' },
      { x: 336, y: 112, w: 270, h: 54, title: 'Datadog Capacity Dashboards', sub: '7d / 30d Namespace Telemetry', stroke: '#A78BFA', text: '#A78BFA' },
    ],
    edges: [[196, 43, 224, 43], [412, 43, 438, 43], [531, 68, 171, 112], [308, 139, 336, 139]],
  },
  {
    slug: 'ota-eks-gitops-vault',
    code: 'PRJ-07',
    title: 'Multi-Service Amazon EKS GitOps & Vault Modernization',
    domain: 'Online Travel & OTA Platform',
    cloud: 'AWS',
    categories: ['aws', 'k8s', 'secops'],
    metric: 'Dynamic Commit CI | Shamir Vault',
    summary:
      'Brought ap-south-1 AWS EKS, VPC, and IAM infra under Terraform, built regex-based Jenkins Helm pipelines, deployed in-cluster HashiCorp Vault, ACM wildcard SSL, and Prometheus/Grafana.',
    challenge:
      'Travel OTA microservices ran on manually created AWS infrastructure in ap-south-1 with scattered credentials and inflexible pipelines that could not isolate builds per changed service.',
    architecture:
      'Codified live AWS VPC, IAM, ECR, and Amazon EKS resources into Terraform modules. Configured NLB/CLB + Nginx Ingress path routing and DNS-validated AWS Certificate Manager (ACM) wildcard SSL (*.domain.com). Wrote Jenkins Groovy Generic Webhook Trigger pipelines matching *-ms commit tags via regex to build images to ECR and update only changed Helm values.yaml tags. Installed in-cluster HashiCorp Vault (Shamir unsealing), Prometheus/Grafana pod dashboards, and s3fs Jenkins ThinBackups to S3.',
    outcome:
      'Eliminated console drift across ap-south-1 infrastructure, accelerated microservice release frequency with automated GitOps tagging, and secured secrets inside Vault.',
    stack: [
      'Amazon EKS & VPC',
      'Terraform',
      'Helm',
      'Jenkins Generic Webhook',
      'HashiCorp Vault (Shamir)',
      'Nginx Ingress & NLB',
      'AWS ACM Wildcard SSL',
      'Prometheus & Grafana',
      'Amazon S3 (s3fs)',
    ],
    diagramTitle: 'TERRAFORM HCL + REGEX JENKINS HELM + IN-CLUSTER VAULT',
    nodes: [
      { x: 16, y: 18, w: 184, h: 50, title: 'Live AWS (ap-south-1)', sub: 'Manual Drift Eliminated', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 226, y: 18, w: 188, h: 50, title: 'Terraform Modules', sub: 'VPC / IAM / ECR / EKS', stroke: '#34D399', text: '#34D399' },
      { x: 440, y: 18, w: 184, h: 50, title: 'Jenkins *-ms Regex', sub: 'Dynamic Helm Tag Diff', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 24, y: 112, w: 284, h: 54, title: 'EKS + NLB/ACM SSL + Nginx Ingress', sub: 'Shamir HashiCorp Vault + s3fs S3', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 334, y: 112, w: 282, h: 54, title: 'Prometheus + Grafana + exporter', sub: 'Node & Pod Saturation Metrics', stroke: '#60A5FA', text: '#60A5FA' },
    ],
    edges: [[200, 43, 226, 43], [414, 43, 440, 43], [532, 68, 166, 112], [308, 139, 334, 139]],
  },
  {
    slug: 'multi-region-gcp-disaster-recovery',
    code: 'PRJ-08',
    title: 'Multi-Region Hub-and-Spoke GCP Disaster Recovery',
    domain: 'National Financial Asset Registry',
    cloud: 'GCP',
    categories: ['gcp', 'k8s', 'secops'],
    metric: 'RPO <= 15m | RTO <= 2h | 4.5M+ Req/Mo',
    summary:
      'Architected regulated Mumbai Primary DC and Delhi DR GCP platform across 3-AZ Private GKE, Cloud Armor WAF, Cloud SQL HA replicas, CRD Solr/ZooKeeper, and Argo CD GitOps.',
    challenge:
      'A high-volume financial registry processing 4.5M+ monthly transactions required resilient Hub-and-Spoke network separation and strict disaster recovery SLAs between Mumbai and Delhi seismic zones.',
    architecture:
      'Architected Private 3-AZ GKE clusters across Mumbai Primary DC and Delhi DR regions behind Google Cloud Armor WAF. Provisioned Cloud SQL PostgreSQL HA with cross-region asynchronous read replicas, Redis memory caching, and 3-replica Apache Solr and ZooKeeper managed via Kubernetes CRDs. Built distributed systemd JNLP Jenkins runners pushing immutable images to Artifact Registry and updating envsubst manifests for Argo CD GitOps across Dev, UAT, and Production.',
    outcome:
      'Guaranteed regulated RPO <= 15 minutes and RTO <= 2 hours resilience across Dev, UAT, and Production environments with automated GitOps rollouts.',
    stack: [
      'GCP',
      'Private GKE (3-AZ)',
      'Cloud Armor WAF',
      'Cloud SQL PostgreSQL HA',
      'Redis',
      'Apache Solr & ZooKeeper CRDs',
      'Argo CD GitOps',
      'Jenkins (systemd JNLP)',
      'Artifact Registry',
    ],
    diagramTitle: 'MUMBAI PRIMARY DC <-> DELHI DR (RPO <= 15M, RTO <= 2H)',
    nodes: [
      { x: 16, y: 18, w: 150, h: 50, title: 'Cloud Armor WAF', sub: '4.5M+ Monthly Req', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 186, y: 18, w: 192, h: 50, title: 'Mumbai DC (3-AZ GKE)', sub: 'Solr + ZooKeeper CRDs', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 398, y: 18, w: 226, h: 50, title: 'Delhi DR Region', sub: 'RPO <= 15m / RTO <= 2h', stroke: '#34D399', text: '#34D399' },
      { x: 22, y: 112, w: 280, h: 54, title: 'Cloud SQL PG HA + Async DR', sub: 'Cross-Region Read Replica + Redis', stroke: '#60A5FA', text: '#60A5FA' },
      { x: 328, y: 112, w: 290, h: 54, title: 'Jenkins envsubst -> Argo CD', sub: 'Artifact Registry Dev/UAT/Prod', stroke: '#A78BFA', text: '#A78BFA' },
    ],
    edges: [[166, 43, 186, 43], [378, 43, 398, 43], [282, 68, 162, 112], [282, 68, 473, 112]],
  },
  {
    slug: 'ai-edtech-5stage-ecs-cicd',
    code: 'PRJ-09',
    title: 'Reusable 5-Stage Containerized Microservices CI/CD',
    domain: 'AI Exam Prep & Tutor SaaS',
    cloud: 'AWS',
    categories: ['aws', 'secops', 'ai'],
    metric: '5-Tier ECS Auto-Promote | DinD Tests',
    summary:
      'Engineered reusable GitLab CI/CD pipelines on self-hosted EC2 Docker-in-Docker runners executing ephemeral Postgres 15 and Chrome tests before promoting Python/Celery workers across 5 ECS tiers.',
    challenge:
      'Python/Django 5 APIs and Celery background inference workers experienced slow manual ECS deployments and environment parity bugs caused by missing integration test databases in CI.',
    architecture:
      'Built modular .gitlab-ci.yml templates executed on dedicated self-hosted Amazon EC2 runners (docker:24-git DinD). Enforced black/flake8 formatting checks, Cobertura test coverage gates, and isolated per-MR integration harnesses launching ephemeral postgres:15 and headless Chrome sidecar containers before pushing immutable ECR tags to Dev, QA, Perf, Staging, and Prod Amazon ECS target groups.',
    outcome:
      'Eliminated manual deployment steps across all 5 runtime tiers and caught database schema and UI regressions inside isolated CI runs prior to staging.',
    stack: [
      'Amazon ECS (Fargate & EC2)',
      'Amazon ECR',
      'GitLab CI/CD (EC2 DinD)',
      'Python 3.11 & Django 5',
      'Celery Workers',
      'PostgreSQL 15 Sidecar',
      'Headless Chrome',
    ],
    diagramTitle: 'SELF-HOSTED EC2 DIN-D RUNNERS -> 5-TIER AMAZON ECS',
    nodes: [
      { x: 16, y: 18, w: 158, h: 50, title: 'GitLab EC2 Runner', sub: 'docker:24-git DinD', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 194, y: 18, w: 214, h: 50, title: 'Quality + Test Sidecars', sub: 'black/flake8 + PG15 + Chrome', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 428, y: 18, w: 196, h: 50, title: 'Amazon ECR Images', sub: 'Django 5 + Celery Workers', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 76, y: 112, w: 488, h: 54, title: '5-Tier Amazon ECS Promotion: Dev -> QA -> Perf -> Stg -> Prod', sub: 'Automated Health-Checked Rolling Deployments + Cobertura Gates', stroke: '#34D399', text: '#34D399' },
    ],
    edges: [[174, 43, 194, 43], [408, 43, 428, 43], [526, 68, 320, 112]],
  },
  {
    slug: 'aks-private-istio-ilb-waf',
    code: 'PRJ-10',
    title: 'Kubernetes Private Ingress & Istio Service Mesh Security',
    domain: 'Public Safety & Law Enforcement SaaS',
    cloud: 'Azure',
    categories: ['azure', 'k8s', 'secops'],
    metric: 'Zero Public Pods | PG WAL DR',
    summary:
      'Converted public Istio Ingress LoadBalancers on AKS into Private Internal Load Balancers routed strictly behind Azure Application Gateway WAF, NSGs, and cross-region PostgreSQL WAL replication.',
    challenge:
      'Mission-critical public safety microservices exposed public Kubernetes LoadBalancer endpoints that bypassed centralized Azure edge WAF inspection.',
    architecture:
      'Reconfigured Istio IngressGateway services on AKS to provision strictly as Internal Load Balancers (ILB) bound to private VNet IPs, terminating and inspecting all external requests behind Azure Application Gateway WAF v2 and strict NSG rules. Maintained Azure DevOps release pipelines and cross-region PostgreSQL Write-Ahead Logging (WAL) database synchronization.',
    outcome:
      'Eliminated direct public internet ingress to AKS worker clusters while preserving continuous Azure DevOps delivery and regional PostgreSQL survivability.',
    stack: [
      'Microsoft Azure AKS',
      'Istio Service Mesh',
      'Azure Internal Load Balancer (ILB)',
      'Azure Application Gateway WAF',
      'Network Security Groups (NSGs)',
      'PostgreSQL WAL Replication',
      'Azure DevOps Pipelines',
    ],
    diagramTitle: 'APP GATEWAY WAF -> PRIVATE ISTIO ILB -> AKS + PG WAL',
    nodes: [
      { x: 16, y: 18, w: 178, h: 50, title: 'Azure App Gateway', sub: 'WAF v2 + Strict NSGs', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 222, y: 18, w: 196, h: 50, title: 'Istio Internal LB', sub: 'Private VNet IP Only', stroke: '#34D399', text: '#34D399' },
      { x: 446, y: 18, w: 178, h: 50, title: 'AKS Mesh Workloads', sub: 'Azure DevOps CI/CD', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 100, y: 112, w: 440, h: 54, title: 'Cross-Region PostgreSQL WAL Replication', sub: 'Private DB Subnet + Continuous Write-Ahead Log Failover', stroke: '#60A5FA', text: '#60A5FA' },
    ],
    edges: [[194, 43, 222, 43], [418, 43, 446, 43], [535, 68, 320, 112]],
  },
  {
    slug: 'adtech-eks-kafka-gitops',
    code: 'PRJ-11',
    title: 'High-Throughput AdTech DSP/SSP Microservices on EKS',
    domain: 'Global AdTech Platform',
    cloud: 'AWS',
    categories: ['aws', 'k8s', 'ai'],
    metric: 'Dual-Pod Pattern | 2-Month Onboarding',
    summary:
      'Onboarded latency-sensitive DSP/SSP microservices in dual-pod configurations onto Amazon EKS via Argo CD GitOps integrated with Kafka, Redis, InfluxDB, MongoDB, and Keycloak.',
    challenge:
      'High-volume Demand-Side (DSP) and Supply-Side (SSP) ad-tech modules required production EKS onboarding within a compressed 2-month sprint alongside low-latency streaming and alert deduplication.',
    architecture:
      'Designed and onboarded dual-pod service architectures (API/Alerting pod + companion Monitoring pod) onto Amazon EKS using Helm charts synced declaratively by Argo CD. Wired Apache Kafka event brokers, Redis impression caching, etcd discovery, InfluxDB time-series metrics, MongoDB alert deduplication, and Keycloak OAuth2 SSO.',
    outcome:
      'Completed full DSP/SSP microservice production onboarding within the 2-month deadline with declarative GitOps rollbacks and deduplicated alerting.',
    stack: [
      'Amazon EKS',
      'Argo CD',
      'Helm',
      'Apache Kafka',
      'Redis',
      'InfluxDB',
      'MongoDB',
      'etcd',
      'Keycloak OAuth2',
    ],
    diagramTitle: 'ARGO CD ON AMAZON EKS -> KAFKA + REDIS + KEYCLOAK MESH',
    nodes: [
      { x: 16, y: 18, w: 162, h: 50, title: 'DSP/SSP Edge', sub: 'Keycloak OAuth2 Auth', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 204, y: 18, w: 204, h: 50, title: 'Amazon EKS (Argo CD)', sub: 'Dual-Pod: API + Monitor', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 434, y: 18, w: 190, h: 50, title: 'Apache Kafka Bus', sub: 'High-Volume Ad Streams', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 42, y: 112, w: 260, h: 54, title: 'Redis Cache + etcd Config', sub: 'In-Memory Impression State', stroke: '#34D399', text: '#34D399' },
      { x: 338, y: 112, w: 260, h: 54, title: 'InfluxDB + MongoDB Dedup', sub: 'Time-Series & Clean Alerts', stroke: '#60A5FA', text: '#60A5FA' },
    ],
    edges: [[178, 43, 204, 43], [408, 43, 434, 43], [306, 68, 172, 112], [529, 68, 468, 112]],
  },
  {
    slug: 'azure-synapse-eventhubs-bi-sync',
    code: 'PRJ-12',
    title: 'Azure Synapse Lakehouse, Event Hubs & Cross-Region BI Sync',
    domain: 'Financial & Insurance Analytics Enterprise',
    cloud: 'Azure',
    categories: ['azure', 'ai'],
    metric: 'Cross-Region BI DR | Private Lakehouse',
    summary:
      'Built private Azure Synapse Serverless SQL/Spark workspaces fed by Event Hubs Capture and automated cross-region .tsbak Tableau backup sync via Azure Container Instances.',
    challenge:
      'Actuarial and insurance teams needed a network-isolated Azure data lakehouse ingesting high-velocity streams alongside automated cross-region survivability for 3-tier Tableau Server HA backups.',
    architecture:
      'Configured Azure Event Hubs (AMQP/HTTP ingestion, checkpointing, Event Capture) feeding ADLS Gen2 Parquet partitions queried over Private Link Hubs in Azure Synapse Analytics (Serverless SQL Pools & Spark Pools). Engineered serverless Azure Container Instances (ACI) synchronization tasks replicating .tsbak backups across regional Azure File Shares backed by Azure Monitor alerting.',
    outcome:
      'Delivered private serverless lakehouse analytics and automated cross-region BI backup replication with proactive SLA notifications.',
    stack: [
      'Microsoft Azure',
      'Azure Synapse Analytics',
      'Azure Event Hubs',
      'ADLS Gen2 Parquet',
      'Azure Private Link',
      'Azure Container Instances (ACI)',
      'Azure Files',
      'Azure Monitor',
      'Tableau Server HA',
    ],
    diagramTitle: 'EVENT HUBS -> SYNAPSE PRIVATE LAKEHOUSE + ACI BI SYNC',
    nodes: [
      { x: 16, y: 18, w: 178, h: 50, title: 'Azure Event Hubs', sub: 'AMQP/HTTP + Capture', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 222, y: 18, w: 204, h: 50, title: 'Synapse Private Hub', sub: 'Serverless SQL + Spark', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 452, y: 18, w: 172, h: 50, title: 'ADLS Gen2 Parquet', sub: 'Partitioned Lakehouse', stroke: '#60A5FA', text: '#60A5FA' },
      { x: 28, y: 112, w: 274, h: 54, title: '3-Tier HA Tableau Cluster', sub: 'Azure Monitor Alert SLAs', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 332, y: 112, w: 280, h: 54, title: 'ACI Cross-Region .tsbak Sync', sub: 'Automated Azure File Copy', stroke: '#34D399', text: '#34D399' },
    ],
    edges: [[194, 43, 222, 43], [426, 43, 452, 43], [324, 68, 165, 112], [302, 139, 332, 139]],
  },
  {
    slug: 'cloudbees-vault-rapid7-compliance',
    code: 'PRJ-13',
    title: 'Enterprise CloudBees CI/CD, Secret Isolation & SIEM',
    domain: 'Financial Services Platform',
    cloud: 'AWS',
    categories: ['aws', 'secops'],
    metric: 'Zero OOM Crashes | Multi-Env Vault',
    summary:
      'Resolved CloudBees Jenkins JVM OOM crashes, enforced HashiCorp Vault DEV/QA/UAT path isolation, integrated Snyk and SonarQube quality gates, and streamed CloudTrail telemetry to Rapid7 SIEM.',
    challenge:
      'Financial CI/CD controllers suffered frequent Java OutOfMemory crashes under JSON webhook bursts while environment secrets lacked strict Vault engine isolation and centralized AWS audit forwarding.',
    architecture:
      'Diagnosed and tuned CloudBees Enterprise Jenkins JVM heap/GC sizing and Generic Webhook Trigger JSON payload parsing. Isolated DEV, QA, and UAT secret boundaries inside HashiCorp Vault, enforced Snyk, SonarQube, and GitHub Org/Repo Rulesets, refactored Terraform AZ subnet lists, and wired AWS CloudTrail logs into Rapid7 SIEM.',
    outcome:
      'Eliminated CI controller OOM downtime, enforced environment-level least-privilege secret isolation, and closed financial CloudTrail audit gaps.',
    stack: [
      'CloudBees Jenkins',
      'Amazon Web Services',
      'HashiCorp Vault',
      'Terraform',
      'Snyk',
      'SonarQube',
      'GitHub Rulesets',
      'Rapid7 SIEM',
      'AWS CloudTrail',
    ],
    diagramTitle: 'CLOUDBEES JENKINS + VAULT ISOLATION + RAPID7 SIEM',
    nodes: [
      { x: 16, y: 18, w: 174, h: 50, title: 'GitHub Rulesets', sub: 'Org JSON Webhooks', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 218, y: 18, w: 204, h: 50, title: 'CloudBees Ops Center', sub: 'JVM Heap OOM Fixed', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 450, y: 18, w: 174, h: 50, title: 'Snyk + SonarQube', sub: 'CVE & Quality Gates', stroke: '#FB7185', text: '#FB7185' },
      { x: 28, y: 112, w: 280, h: 54, title: 'HashiCorp Vault Isolation', sub: 'Scoped DEV / QA / UAT Paths', stroke: '#34D399', text: '#34D399' },
      { x: 334, y: 112, w: 280, h: 54, title: 'Terraform + Rapid7 CloudTrail', sub: 'Subnet Refactor + SIEM Audit', stroke: '#A78BFA', text: '#A78BFA' },
    ],
    edges: [[190, 43, 218, 43], [422, 43, 450, 43], [320, 68, 168, 112], [537, 68, 474, 112]],
  },
  {
    slug: 'cybersecurity-harness-bluegreen-fsx',
    code: 'PRJ-14',
    title: 'Blue-Green Release Modernization & FSx Event Alerting',
    domain: 'Cybersecurity SaaS Platform',
    cloud: 'AWS',
    categories: ['aws', 'secops'],
    metric: 'Zero-Downtime Releases | FSx Bot',
    summary:
      'Operated Blue-Green releases migrating legacy Jenkins pipelines to Harness CD, rotated production credentials, and engineered serverless CloudWatch/EventBridge/Lambda alerts for Amazon FSx.',
    challenge:
      'Security SaaS web and backend applications relied on aging Jenkins credential chains undergoing Harness migration while shared Amazon FSx storage lacked automated threshold alerts.',
    architecture:
      'Managed zero-downtime Blue-Green application cutovers, rotated Jenkins/Harness tokens and security passwords, and engineered automated Amazon FSx capacity and throughput alerting using CloudWatch Events, EventBridge, AWS Lambda, and Amazon SNS. Resolved AWS Support cases and automated scheduled Windows maintenance tasks.',
    outcome:
      'Maintained uninterrupted customer availability during CI/CD tool migration and prevented reactive Amazon FSx disk-full incidents.',
    stack: [
      'Amazon Web Services',
      'Harness CD (Blue-Green)',
      'Jenkins',
      'Amazon FSx',
      'CloudWatch & EventBridge',
      'AWS Lambda',
      'Amazon SNS',
      'Windows Task Scheduler',
    ],
    diagramTitle: 'JENKINS -> HARNESS BLUE-GREEN + FSX EVENTBRIDGE ALERTS',
    nodes: [
      { x: 16, y: 18, w: 184, h: 50, title: 'Jenkins -> Harness CD', sub: 'Secret/Token Rotation', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 224, y: 18, w: 196, h: 50, title: 'Blue / Green Deploy', sub: 'Zero-Downtime Switch', stroke: '#34D399', text: '#34D399' },
      { x: 444, y: 18, w: 180, h: 50, title: 'Windows Task Scripts', sub: 'Scheduled Automation', stroke: '#60A5FA', text: '#60A5FA' },
      { x: 84, y: 112, w: 472, h: 54, title: 'Amazon FSx -> CloudWatch Events -> AWS Lambda -> SNS', sub: 'Proactive Capacity & IOPS Anomaly Notifications + AWS Support', stroke: '#FBBF24', text: '#FBBF24' },
    ],
    edges: [[200, 43, 224, 43], [420, 43, 444, 43], [322, 68, 320, 112]],
  },
  {
    slug: 'sports-aws-iam-snowflake-lake',
    code: 'PRJ-15',
    title: 'AWS Data Lakehouse, IAM Federation & Snowflake Integration',
    domain: 'Sports Media & Analytics Platform',
    cloud: 'AWS',
    categories: ['aws', 'secops', 'ai'],
    metric: 'Federated Zero-Trust | S3 -> Snowflake',
    summary:
      'Configured enterprise AWS IAM SSO federation, granular S3 object permissions, AWS Step Functions and Airflow DAGs, bridging Amazon Athena/Glue lake stores cleanly with Snowflake.',
    challenge:
      'Analytics teams across AWS accounts needed secure cross-service access to query telemetry data spanning Amazon S3, Athena, and Snowflake without static access keys.',
    architecture:
      'Implemented federated IAM SSO roles and granular Amazon S3 object-level policies across human analysts and AWS Lambda functions. Orchestrated ETL pipelines via AWS Step Functions and Apache Airflow DAGs monitoring run completion, and integrated AWS Glue Data Catalog and Amazon Athena serverless querying directly with Snowflake external stages.',
    outcome:
      'Delivered governed cross-platform analytics between AWS S3/Athena and Snowflake under strict least-privilege IAM compliance.',
    stack: [
      'AWS IAM Federation (SSO)',
      'Amazon S3 (Object ACLs)',
      'Snowflake',
      'Amazon Athena',
      'AWS Glue',
      'AWS Step Functions',
      'AWS Lambda',
      'Apache Airflow',
    ],
    diagramTitle: 'IAM SSO -> S3 LAKE + STEP FUNCTIONS + ATHENA/SNOWFLAKE',
    nodes: [
      { x: 16, y: 18, w: 182, h: 50, title: 'AWS IAM Federation', sub: 'S3 Object-Level Roles', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 224, y: 18, w: 194, h: 50, title: 'Step Functions+Lambda', sub: 'Apache Airflow DAGs', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 444, y: 18, w: 180, h: 50, title: 'Amazon S3 + Glue', sub: 'Curated Lake Store', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 88, y: 112, w: 464, h: 54, title: 'Snowflake Warehouse <-> Amazon Athena Federated SQL', sub: 'Least-Privilege Cross-Account Data Mesh & DAG SLA Monitoring', stroke: '#34D399', text: '#34D399' },
    ],
    edges: [[198, 43, 224, 43], [418, 43, 444, 43], [321, 68, 320, 112], [534, 68, 430, 112]],
  },
  {
    slug: 'sre-self-healing-pipeline-agent',
    code: 'PRJ-00',
    title: 'SRE Self-Healing CI/CD Pipeline Agent (pipeline-agent.tech)',
    domain: 'Personal Open-Source AI-SRE Platform',
    cloud: 'GCP / AI',
    categories: ['gcp', 'secops', 'ai'],
    metric: 'Live AI-SRE | Auto Fix PRs',
    summary:
      'Event-driven autonomous SRE agent on Google Cloud Run and Cloud Tasks using Gemini 2.5 Flash API (with log filtering/chunking to cut token credits) and PyGithub to remediate broken CI builds.',
    challenge:
      'Debugging failing GitHub Actions pipelines requires manually digging through verbose stack traces, comparing recent commit diffs, and authoring repetitive hotfix PRs.',
    architecture:
      'Built an asynchronous webhook receiver on Google Cloud Run queuing workflow_run failures through Google Cloud Tasks. Applied log pre-filtering and stack-trace chunking to cut LLM token and credit burn before running root-cause analysis against commit diffs via the Gemini 2.5 Flash API. Dispatches verified branches and Pull Requests via PyGithub while logging audit trails in PostgreSQL.',
    outcome:
      'Live public AI-SRE platform reducing incident mean-time-to-remediation down to seconds with complete frontend telemetry visibility.',
    stack: [
      'Google Cloud Run',
      'Google Cloud Tasks',
      'Gemini 2.5 Flash API',
      'Python / FastAPI',
      'PyGithub',
      'PostgreSQL',
      'GitHub Actions Webhooks',
      'Cloudflare',
    ],
    diagramTitle: 'WEBHOOK -> CLOUD RUN + TASKS -> GEMINI 2.5 -> PYGITHUB PR',
    nodes: [
      { x: 14, y: 18, w: 138, h: 50, title: 'GitHub Webhook', sub: 'Build Failed Event', stroke: '#FBBF24', text: '#FBBF24' },
      { x: 170, y: 18, w: 142, h: 50, title: 'Cloud Tasks+Run', sub: 'Async Worker Queue', stroke: '#38BDF8', text: '#38BDF8' },
      { x: 330, y: 18, w: 144, h: 50, title: 'Gemini 2.5 Flash', sub: 'RCA + Token Chunk', stroke: '#A78BFA', text: '#A78BFA' },
      { x: 492, y: 18, w: 134, h: 50, title: 'PyGithub PR', sub: 'Auto Fix Patch', stroke: '#34D399', text: '#34D399' },
      { x: 100, y: 112, w: 440, h: 50, title: 'PostgreSQL Incident Store & Live SSE Stream', sub: 'pipeline-agent.tech Production Audit Log', stroke: '#60A5FA', text: '#60A5FA' },
    ],
    edges: [[152, 43, 170, 43], [312, 43, 330, 43], [474, 43, 492, 43], [241, 68, 241, 112]],
    links: [
      { label: 'Live Platform', href: 'https://pipeline-agent.tech/' },
      { label: 'Backend Repo', href: 'https://github.com/NagabairuManoj/sre-agent-backend' },
      { label: 'Frontend Repo', href: 'https://github.com/NagabairuManoj/sre-agent-frontend' },
    ],
  },
];
