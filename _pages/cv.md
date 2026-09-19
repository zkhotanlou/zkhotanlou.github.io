---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

A PDF version of this CV is available [here](/files/Zahra_Khotanlou_CV.pdf). <!-- PLACEHOLDER: upload your CV PDF to /files/ and update this filename -->

Education
======
* MASc in Electrical and Computer Engineering (Pattern Analysis and Machine Intelligence), University of Waterloo, 2024 – 2026
  * GPA: 88.6/100
  * Teaching Assistant: ECE457 Intro to Machine Learning (Fall 2025), ECE250 Algorithms and Data Structures (Winter 2026)
* B.Sc. in Computer Engineering, Shahid Beheshti University, 2019 – 2023
  * GPA: 17.69/20; Ranked 5th in class
  * Top 1% nationally, Iran's National Universities Entrance Exam (Konkur), 2019
  * Awarded Best B.Sc. Thesis Project

Research Experience
======
* **Research Assistant — Agentic AI for Value-Driven Scheduling**, Jun 2026 – Present
  * Augmented Intelligence Lab, University of Waterloo, Supervisor: Prof. Edith Law
  * Designing an uncertainty-aware Bayesian model for value alignment from conversational, behavioral, and reflective evidence
  * Building a grounded LLM pipeline (interviewer, evidence extractor, reviewer) to ground inferred values in verifiable user statements
  * Modeling behavioral choices via a softmax decision model to continuously update value estimates
  * Introducing counterfactual value previews for human-in-the-loop reflection before a decision is committed

* **Research Assistant — Explainable & Fair AI**, Sept 2024 – Apr 2026
  * CHARM Lab, University of Waterloo, Supervisor: Prof. Amir-Hossein Karimi
  * Published first-author research on multi-agent algorithmic fairness, accepted to ACM FAccT 2026
  * Designed a novel MILP-based optimization achieving 97–99% of optimal social welfare via capacity redistribution
  * Built RecourseBench, a scalable ML fairness benchmarking platform spanning 22 methods and 137 configurations
  * Engineered CI/CD pipelines for reproducible, cross-framework ML evaluation

* **Research Assistant — Protein Property Prediction**, Mar 2023 – Sept 2024
  * National Institute of Genetic Engineering and Biotechnology (NIGEB)
  * Built ToxTrans, a deep learning pipeline for protein toxicity prediction using transformer-based sequence embeddings (ProtT5)
  * Applied statistical feature selection and gradient-boosted modeling (LightGBM) to high-dimensional biological data
  * Achieved 93.76% accuracy, outperforming prior state-of-the-art by +2.16%
  * Awarded Best B.Sc. Thesis for this work

Industry Experience
======
* **Software Engineer Intern**, Star Academy (Mohaymen ICT Group), Jul – Sept 2021
  * A nationally competitive internship program selecting top CS students from Iran's leading technical universities
  * Built a Java-based search engine with inverted-index architecture and Boolean query support
  * Refactored to SOLID principles with full test coverage; re-implemented in C# via TDD
  * Migrated to Elasticsearch with Kibana visualization, exposed through a RESTful API (ASP.NET Core, Angular)
  * Delivered an ETL pipeline (SQL Server ingestion, transform, web-based run management) as team capstone

Skills
======
* **Programming:** Python, Java, C++, TypeScript, C#, SQL
* **Machine Learning & NLP:** PyTorch, TensorFlow, Scikit-learn, LightGBM, Hugging Face Transformers, Graph Neural Networks
* **Generative AI:** RAG pipelines, LLM orchestration, prompt engineering, structured outputs
* **Data & MLOps:** Pandas, NumPy, ETL pipelines, relational databases, MLflow, DVC, Prometheus, Grafana
* **Systems:** Linux, Docker, Kubernetes, AWS, Git, GitHub Actions CI/CD
* **Engineering:** REST APIs, ASP.NET Core, Entity Framework Core, Flask, FastAPI

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Awards
======
* Best B.Sc. Thesis Project, Shahid Beheshti University
* Merit-Based Master's Scholarship, Shahid Beheshti University
* Top 1% nationally, Iran's National Universities Entrance Exam (Konkur)
