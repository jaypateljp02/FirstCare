-- First, clear existing services and categories (optional - comment out if you want to keep existing)
-- DELETE FROM services;
-- DELETE FROM service_categories;

-- Insert Service Categories
INSERT INTO service_categories (name, icon_name) VALUES
('Blood Tests', 'Droplet'),
('Cardiac Tests', 'Heart'),
('Hormonal Tests', 'Activity'),
('Tumor Markers', 'FileText'),
('Immunoassays', 'TestTube'),
('Serology', 'FlaskConical'),
('Autoimmune Tests', 'FileCheck'),
('Urine Tests', 'FlaskConical'),
('Stool Tests', 'FileText'),
('Respiratory Tests', 'Activity'),
('Body Fluid Tests', 'Droplet'),
('Microbiology Tests', 'FlaskConical'),
('Histology Tests', 'FileText'),
('Allergy Tests', 'Pill'),
('Genetic Tests', 'FileCheck'),
('Special Tests', 'TestTube'),
('Pregnancy Tests', 'Heart'),
('Health Packages', 'TestTube')
ON CONFLICT DO NOTHING;

-- Insert All Services
INSERT INTO services (title, description, report_time, icon_name, category) VALUES
-- Blood Tests - Hematology
('Complete Blood Count (CBC)', 'Comprehensive analysis of blood cells including RBC, WBC, and platelets to evaluate overall health and detect anemia, infections and blood disorders.', 'Same Day', 'Droplet', 'Blood Tests'),
('Hemoglobin', 'Measures hemoglobin level to diagnose anemia and assess oxygen-carrying capacity of blood.', 'Same Day', 'Droplet', 'Blood Tests'),
('Platelet Count', 'Measures the number of platelets to assess blood clotting ability and detect bleeding disorders.', 'Same Day', 'Droplet', 'Blood Tests'),
('Absolute Eosinophil Count (AEC)', 'Measures eosinophils (white blood cells) to diagnose allergies, parasitic infections and certain cancers.', 'Same Day', 'Droplet', 'Blood Tests'),
('Reticulocyte Count', 'Measures young red blood cells to assess bone marrow function and recovery from anemia.', 'Same Day', 'Droplet', 'Blood Tests'),
('Peripheral Blood Smear', 'Microscopic examination of blood cells to detect abnormalities in cell shape, size and morphology.', 'Same Day', 'Droplet', 'Blood Tests'),
('Bone Marrow Aspiration Cytology', 'Examination of bone marrow cells to diagnose blood cancers, aplastic anemia and myelodysplastic syndrome.', '2-3 Days', 'Droplet', 'Blood Tests'),
('Beta Thalassemia Screening', 'Blood test to screen for Thalassemia traits and inherited hemoglobin disorders.', '2-3 Days', 'Droplet', 'Blood Tests'),
('HB Electrophoresis', 'Identifies different types of hemoglobin to diagnose hemoglobinopathies and thalassemia.', '2-3 Days', 'Droplet', 'Blood Tests'),
('Bleeding Time & Clotting Time', 'Measures time taken for blood to stop bleeding and form clots to assess platelet function.', '1 Hour', 'Droplet', 'Blood Tests'),
('Sickling Test', 'Screening test to detect sickle cell trait or disease.', 'Same Day', 'Droplet', 'Blood Tests'),
('ESR (Erythrocyte Sedimentation Rate)', 'Measures inflammation and infection rate in the blood.', '4 Hours', 'Droplet', 'Blood Tests'),
('Blood Group', 'Determines ABO and Rh blood group type for transfusions and pregnancy management.', '30 Minutes', 'Droplet', 'Blood Tests'),
('Coombs Test - Direct', 'Tests for autoimmune hemolytic anemia by detecting antibodies on red blood cells.', '24 Hours', 'Droplet', 'Blood Tests'),
('Coombs Test - Indirect', 'Tests for blood transfusion compatibility and hemolytic disease of newborn.', '24 Hours', 'Droplet', 'Blood Tests'),

-- Blood Tests - Biochemistry (Glucose)
('Blood Glucose Level (Fasting)', 'Measures fasting blood sugar to screen for and monitor diabetes.', '4 Hours', 'Activity', 'Blood Tests'),
('Blood Glucose Level (Post Prandial)', 'Measures blood sugar 2 hours after meals to assess glucose control.', '4 Hours', 'Activity', 'Blood Tests'),
('Blood Glucose Level (Random)', 'Measures blood sugar at any time of day to screen for diabetes.', '2 Hours', 'Activity', 'Blood Tests'),
('HbA1c (Glycosylated Hemoglobin)', 'Measures average blood sugar levels over the past 3 months for diabetes management.', 'Same Day', 'Activity', 'Blood Tests'),

-- Blood Tests - Kidney Function
('Blood Urea Level', 'Measures urea nitrogen to assess kidney function and protein metabolism.', 'Same Day', 'FileCheck', 'Blood Tests'),
('Blood Urea Nitrogen (BUN)', 'Measures nitrogen component of urea for kidney function assessment.', 'Same Day', 'FileCheck', 'Blood Tests'),
('Creatinine', 'Measures creatinine levels to evaluate kidney function.', 'Same Day', 'FileCheck', 'Blood Tests'),
('Kidney Function Test (Renal Profile)', 'Evaluates kidney health by measuring urea, creatinine and electrolytes.', 'Same Day', 'FileCheck', 'Blood Tests'),
('Renal Function Test (Mini)', 'Basic kidney function assessment with limited parameters.', '4 Hours', 'FileCheck', 'Blood Tests'),
('Renal Function Test (Max)', 'Extended kidney function assessment with comprehensive parameters.', 'Same Day', 'FileCheck', 'Blood Tests'),
('eGFR (Estimated Glomerular Filtration Rate)', 'Calculates kidney function based on creatinine levels to stage chronic kidney disease.', 'Same Day', 'FileCheck', 'Blood Tests'),

-- Blood Tests - Electrolytes
('Electrolytes Panel (Na, K, Cl, HCO3)', 'Measures sodium, potassium, chloride and bicarbonate for fluid and electrolyte balance.', 'Same Day', 'Activity', 'Blood Tests'),
('Sodium (Na)', 'Measures sodium levels to assess fluid balance and neurological function.', 'Same Day', 'Activity', 'Blood Tests'),
('Potassium (K)', 'Measures potassium levels for heart and muscle function assessment.', 'Same Day', 'Activity', 'Blood Tests'),
('Chloride (Cl)', 'Measures chloride levels to assess electrolyte balance.', 'Same Day', 'Activity', 'Blood Tests'),
('Bicarbonate (HCO3)', 'Measures bicarbonate levels to assess acid-base balance.', 'Same Day', 'Activity', 'Blood Tests'),

-- Blood Tests - Liver Function
('Liver Function Test (LFT)', 'Measures liver enzymes (SGOT, SGPT, ALP) and bilirubin to assess liver health.', 'Same Day', 'FileCheck', 'Blood Tests'),
('SGOT (AST)', 'Enzyme marker for liver and heart damage.', 'Same Day', 'FileCheck', 'Blood Tests'),
('SGPT (ALT)', 'Liver-specific enzyme to detect hepatic injury and inflammation.', 'Same Day', 'FileCheck', 'Blood Tests'),
('Alkaline Phosphatase', 'Enzyme involved in bone and liver function assessment.', 'Same Day', 'FileCheck', 'Blood Tests'),
('Bilirubin', 'Measures total and direct bilirubin to assess liver function and hemolysis.', 'Same Day', 'FileCheck', 'Blood Tests'),
('Albumin', 'Measures serum albumin to assess liver function and protein status.', 'Same Day', 'FileCheck', 'Blood Tests'),
('Total Protein', 'Measures total serum protein concentration for nutritional and liver assessment.', 'Same Day', 'FileCheck', 'Blood Tests'),
('Albumin/Globulin Ratio', 'Assesses balance of albumin and globulin proteins in serum.', 'Same Day', 'FileCheck', 'Blood Tests'),

-- Blood Tests - Lipid Profile
('Lipid Profile', 'Measures cholesterol, LDL, HDL and triglycerides to assess cardiovascular risk.', 'Same Day', 'Heart', 'Blood Tests'),
('Cholesterol', 'Measures total cholesterol for cardiovascular risk assessment.', 'Same Day', 'Heart', 'Blood Tests'),
('LDL Cholesterol', 'Measures bad cholesterol linked to atherosclerosis.', 'Same Day', 'Heart', 'Blood Tests'),
('HDL Cholesterol', 'Measures good cholesterol that protects against heart disease.', 'Same Day', 'Heart', 'Blood Tests'),
('Triglyceride', 'Measures triglyceride levels for cardiovascular risk assessment.', 'Same Day', 'Heart', 'Blood Tests'),
('Lipoprotein A (LP-a)', 'Measures LP-a to assess genetic cardiovascular risk.', '24 Hours', 'Heart', 'Blood Tests'),
('Apolipoprotein', 'Measures apolipoprotein levels to assess cardiovascular risk.', '24 Hours', 'Heart', 'Blood Tests'),
('Apolipoprotein A1', 'Measures APO A1 for HDL function assessment.', '24 Hours', 'Heart', 'Blood Tests'),
('Apolipoprotein B', 'Measures APO B for LDL function assessment.', '24 Hours', 'Heart', 'Blood Tests'),
('Apo B / Apo A1 Ratio', 'Calculates ratio for enhanced cardiovascular risk assessment.', '24 Hours', 'Heart', 'Blood Tests'),
('LP-PLA2', 'Measures lipoprotein-associated phospholipase A2 for cardiovascular risk.', '24 Hours', 'Heart', 'Blood Tests'),

-- Blood Tests - Minerals & Vitamins
('Uric Acid', 'Measures uric acid levels to assess gout risk and kidney function.', 'Same Day', 'Pill', 'Blood Tests'),
('Calcium', 'Measures calcium levels for bone health, heart and nervous system function.', 'Same Day', 'Pill', 'Blood Tests'),
('Phosphorus', 'Measures phosphorus levels for bone and mineral metabolism.', 'Same Day', 'Pill', 'Blood Tests'),
('Magnesium', 'Measures magnesium levels for muscle and nerve function.', 'Same Day', 'Pill', 'Blood Tests'),

-- Blood Tests - Iron Studies
('Iron Studies / Iron Profile', 'Measures serum iron, ferritin and TIBC for iron metabolism assessment.', 'Same Day', 'Droplet', 'Blood Tests'),
('Serum Iron', 'Measures iron levels to diagnose iron deficiency or overload.', 'Same Day', 'Droplet', 'Blood Tests'),
('Ferritin', 'Measures iron storage to assess iron deficiency or hemochromatosis.', 'Same Day', 'Droplet', 'Blood Tests'),
('TIBC (Total Iron Binding Capacity)', 'Measures iron-binding capacity of transferrin in blood.', 'Same Day', 'Droplet', 'Blood Tests'),
('Iron Deficiency Profile', 'Complete assessment of iron metabolism including iron, ferritin, TIBC and transferrin.', 'Same Day', 'Droplet', 'Blood Tests'),
('Serum Copper', 'Measures copper levels to assess copper metabolism and deficiency.', 'Same Day', 'Droplet', 'Blood Tests'),
('Zinc', 'Measures zinc levels for immune function and wound healing.', 'Same Day', 'Droplet', 'Blood Tests'),
('Transferrin', 'Measures transferrin levels for iron transport assessment.', '24 Hours', 'Droplet', 'Blood Tests'),

-- Blood Tests - Enzymes
('Amylase', 'Measures pancreatic enzyme to diagnose pancreatitis.', 'Same Day', 'Activity', 'Blood Tests'),
('Amylase Fluid', 'Measures amylase in body fluids for pancreatic disorders.', '24 Hours', 'Activity', 'Blood Tests'),
('Lipase', 'Measures lipase enzyme for pancreatic function assessment.', 'Same Day', 'Activity', 'Blood Tests'),
('Lactate Dehydrogenase (LDH)', 'Enzyme marker for tissue damage in heart, liver, kidneys and muscles.', 'Same Day', 'Activity', 'Blood Tests'),
('CPK (Creatine Phosphokinase)', 'Measures muscle enzyme to diagnose muscle damage and heart attacks.', 'Same Day', 'Activity', 'Blood Tests'),
('CK-MB', 'Heart-specific isoenzyme for myocardial infarction diagnosis.', 'Same Day', 'Heart', 'Blood Tests'),
('Acid Phosphatase', 'Enzyme used to monitor prostate cancer treatment.', 'Same Day', 'Activity', 'Blood Tests'),

-- Blood Tests - Diabetes Related
('Blood Ketones (D-3-Hydroxybutyrate)', 'Measures ketone bodies for diabetes management and metabolic assessment.', '4 Hours', 'Activity', 'Blood Tests'),
('C Peptide', 'Measures insulin production capacity for diabetes classification.', '24 Hours', 'Activity', 'Blood Tests'),
('Insulin Level (Fasting)', 'Measures fasting insulin to assess insulin resistance and pancreatic function.', '24 Hours', 'Activity', 'Blood Tests'),
('Insulin Level (Post Prandial)', 'Measures insulin response after meals for glucose metabolism assessment.', '24 Hours', 'Activity', 'Blood Tests'),
('Insulin Level (Random)', 'Measures insulin at any time for diabetes assessment.', '24 Hours', 'Activity', 'Blood Tests'),
('HOMA-IR', 'Calculates insulin resistance index for metabolic syndrome assessment.', '24 Hours', 'Activity', 'Blood Tests'),

-- Blood Tests - Other Biochemistry
('Homocysteine', 'Measures homocysteine for cardiovascular risk assessment.', '24 Hours', 'Heart', 'Blood Tests'),
('Bile Acids', 'Measures bile acids for liver disease assessment.', '24 Hours', 'FileCheck', 'Blood Tests'),
('Ceruloplasmin', 'Measures ceruloplasmin to diagnose Wilson disease and copper metabolism disorders.', '24 Hours', 'Activity', 'Blood Tests'),
('Ammonia', 'Measures ammonia levels to assess liver function in hepatic encephalopathy.', '24 Hours', 'FileCheck', 'Blood Tests'),

-- Blood Tests - Coagulation
('PT/INR (Prothrombin Time)', 'Measures blood clotting time and monitors anticoagulant therapy.', 'Same Day', 'Droplet', 'Blood Tests'),
('APTT (Activated Partial Thromboplastin Time)', 'Assesses blood clotting function and monitors heparin therapy.', 'Same Day', 'Droplet', 'Blood Tests'),
('Coagulation Profile', 'Complete assessment of blood clotting mechanism (PT/INR, APTT, Fibrinogen).', 'Same Day', 'Droplet', 'Blood Tests'),
('D-Dimer', 'Measures fibrin degradation products to diagnose thrombosis and DIC.', '2 Hours', 'Droplet', 'Blood Tests'),
('Fibrinogen', 'Measures fibrinogen levels for bleeding and clotting assessment.', 'Same Day', 'Droplet', 'Blood Tests'),
('Lupus Anticoagulant', 'Screen for antiphospholipid antibodies causing thrombosis.', '24 Hours', 'Droplet', 'Blood Tests'),

-- Cardiac Tests
('Troponin I', 'Heart-specific troponin for acute myocardial infarction diagnosis.', '1-2 Hours', 'Heart', 'Cardiac Tests'),
('Troponin T', 'Cardiac troponin for myocardial injury assessment.', '2-3 Hours', 'Heart', 'Cardiac Tests'),
('NT-Pro-BNP', 'Measures heart failure marker for cardiac dysfunction diagnosis.', '24 Hours', 'Heart', 'Cardiac Tests'),
('hs-CRP (High-Sensitivity C-Reactive Protein)', 'Measures inflammation marker for cardiovascular risk.', 'Same Day', 'Heart', 'Cardiac Tests'),
('CRP (C-Reactive Protein)', 'Acute phase reactant for inflammation assessment in various infections and diseases.', 'Same Day', 'Heart', 'Cardiac Tests'),

-- Hormonal Tests - Thyroid
('Thyroid Function Test (TFT)', 'Complete thyroid assessment for metabolism and endocrine function (T3, T4, TSH).', '24 Hours', 'Activity', 'Hormonal Tests'),
('TSH (Thyroid Stimulating Hormone)', 'Measures TSH for primary hypothyroidism and hyperthyroidism screening.', '24 Hours', 'Activity', 'Hormonal Tests'),
('TSH Ultra Sensitive', 'High-sensitivity TSH test for early thyroid disease detection.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Free T3 (Tri-Iodothyronine)', 'Measures active thyroid hormone for thyroid function assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Free T4 (Thyroxine)', 'Measures free T4 for accurate thyroid function evaluation.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Total T3', 'Measures total T3 for thyroid hormone assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Total T4', 'Measures total T4 for thyroid function evaluation.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Free TFT', 'Complete thyroid panel including free T3, free T4 and TSH.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Thyroglobulin', 'Measures thyroglobulin for thyroid cancer monitoring.', '24 Hours', 'Activity', 'Hormonal Tests'),

-- Hormonal Tests - Reproductive
('Prolactin', 'Hormone test for fertility issues, menstrual irregularities and pituitary disorders.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Prolactin (Male)', 'Measures prolactin in males for fertility and pituitary assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('FSH (Follicle Stimulating Hormone)', 'Measures FSH for reproductive and menopausal assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('LH (Luteinizing Hormone)', 'Measures LH for reproductive function and ovulation assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('FSH / LH / PRL Panel', 'Combined hormonal assessment for fertility evaluation.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Testosterone (Total)', 'Measures total testosterone for sexual function and fertility assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Free Testosterone', 'Measures free testosterone (active form) for androgen assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('DHT (Dihydrotestosterone)', 'Measures DHT for androgen evaluation in male pattern baldness and prostate issues.', '24 Hours', 'Activity', 'Hormonal Tests'),
('DHEA-S', 'Measures DHEA-S for adrenal function assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Progesterone', 'Measures progesterone for fertility and menstrual cycle assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('17-OH-Progesterone', 'Measures 17-OH-progesterone for adrenal function assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Estradiol (E2)', 'Measures estradiol for reproductive and menopausal assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Estriol (E3)', 'Measures estriol in prenatal screening.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Androstenedione', 'Measures androstenedione for adrenal and ovarian function.', '24 Hours', 'Activity', 'Hormonal Tests'),
('AMH (Anti-Mullerian Hormone)', 'Measures ovarian reserve for fertility assessment in women.', '24 Hours', 'Activity', 'Hormonal Tests'),
('SHBG (Sex Hormone Binding Globulin)', 'Measures SHBG for androgen and estrogen metabolism assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Free Androgen Index (FAI)', 'Calculates free androgen levels for hyperandrogenism assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),

-- Hormonal Tests - Adrenal
('ACTH (Adrenocorticotropic Hormone)', 'Measures ACTH for adrenal insufficiency and Cushings syndrome diagnosis.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Cortisol (8 AM)', 'Measures morning cortisol for adrenal function assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Cortisol (4 PM)', 'Measures afternoon cortisol for Cushings syndrome screening.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Aldosterone', 'Measures aldosterone for hypertension and electrolyte disorders.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Aldosterone/Direct Renin Ratio', 'Measures for primary hyperaldosteronism assessment.', '24 Hours', 'Activity', 'Hormonal Tests'),

-- Hormonal Tests - Parathyroid
('Intact PTH (Parathyroid Hormone)', 'Measures PTH for calcium and bone metabolism regulation.', '24 Hours', 'Activity', 'Hormonal Tests'),
('Calcitonin', 'Measures calcitonin for thyroid C-cell disorders and calcium regulation.', '24 Hours', 'Activity', 'Hormonal Tests'),

-- Tumor Markers
('PSA (Prostate Specific Antigen)', 'Screening test for prostate cancer and prostate health monitoring.', '24 Hours', 'FileText', 'Tumor Markers'),
('Free PSA', 'Measures free PSA for improved prostate cancer risk stratification.', '24 Hours', 'FileText', 'Tumor Markers'),
('CA-125', 'Tumor marker test used to monitor ovarian cancer treatment and diagnosis.', '24 Hours', 'FileText', 'Tumor Markers'),
('CA 15.3', 'Breast cancer marker for monitoring treatment response.', '24 Hours', 'FileText', 'Tumor Markers'),
('CA 19.9', 'Pancreatic cancer marker for diagnosis and monitoring.', '24 Hours', 'FileText', 'Tumor Markers'),
('CEA (Carcinoembryonic Antigen)', 'Tumor marker for colorectal and other cancers.', '24 Hours', 'FileText', 'Tumor Markers'),
('Alpha Fetoprotein (AFP)', 'Measures AFP for hepatocellular carcinoma and germ cell tumor screening.', '24 Hours', 'FileText', 'Tumor Markers'),
('Beta HCG', 'Pregnancy hormone and tumor marker for germ cell tumors.', '24 Hours', 'FileText', 'Tumor Markers'),
('Free Beta HCG', 'Measures free beta HCG for prenatal screening and tumor detection.', '24 Hours', 'FileText', 'Tumor Markers'),

-- Immunoassays
('Vitamin B12', 'Measures Vitamin B12 levels to detect deficiency anemia and neurological disorders.', '24 Hours', 'Pill', 'Immunoassays'),
('Folic Acid', 'Measures folic acid for anemia and neurological disorder diagnosis.', '24 Hours', 'Pill', 'Immunoassays'),
('Vitamin D (25-OH)', 'Assesses Vitamin D levels for bone health and immune function.', '24 Hours', 'Pill', 'Immunoassays'),
('Vitamin D1 25 Dihydroxy', 'Measures active metabolite of Vitamin D for calcium absorption.', '24 Hours', 'Pill', 'Immunoassays'),
('Vitamin E', 'Measures Vitamin E levels for antioxidant status and neurological assessment.', '24 Hours', 'Pill', 'Immunoassays'),
('IgE Level', 'Measures total IgE for allergy assessment.', '24 Hours', 'TestTube', 'Immunoassays'),
('IL-6 (Interleukin-6)', 'Measures inflammatory cytokine IL-6 for inflammation assessment.', '24 Hours', 'TestTube', 'Immunoassays'),
('Beta 2 Microglobulin', 'Measures B2M for kidney function and tumor burden assessment.', '24 Hours', 'TestTube', 'Immunoassays'),
('Immunofixation (Serum & Urine)', 'Identifies monoclonal proteins for multiple myeloma diagnosis.', '3-5 Days', 'TestTube', 'Immunoassays'),
('PCT (Procalcitonin)', 'Markers for bacterial infections and sepsis assessment.', '24 Hours', 'TestTube', 'Immunoassays'),

-- Serology - Viral
('HIV 1 & 2 Antibodies', 'Screening test for Human Immunodeficiency Virus infection.', '24 Hours', 'FlaskConical', 'Serology'),
('HIV ELISA', 'ELISA method for HIV antibody detection.', '24 Hours', 'FlaskConical', 'Serology'),
('HBsAg (Hepatitis B Surface Antigen)', 'Screening test for active Hepatitis B infection.', 'Same Day', 'FlaskConical', 'Serology'),
('Anti HBsAg', 'Measures total antibody to Hepatitis B surface antigen.', '24 Hours', 'FlaskConical', 'Serology'),
('Anti-HBs Titre', 'Quantifies immunity to Hepatitis B after vaccination or infection.', '24 Hours', 'FlaskConical', 'Serology'),
('HBeAg', 'Indicates active Hepatitis B replication and infectivity.', '24 Hours', 'FlaskConical', 'Serology'),
('HBV DNA Quantitative Viral Load', 'Measures Hepatitis B viral load for treatment monitoring.', '2-3 Days', 'FlaskConical', 'Serology'),
('HCV Total Antibodies', 'Screening test for Hepatitis C infection.', '24 Hours', 'FlaskConical', 'Serology'),
('HCV Rapid Test', 'Rapid screening test for Hepatitis C antibodies.', '30 Minutes', 'FlaskConical', 'Serology'),
('Anti-Hepatitis A (HAV) IgG', 'Measures immunity to Hepatitis A after vaccination or infection.', '24 Hours', 'FlaskConical', 'Serology'),
('Anti-Hepatitis A (HAV) IgM', 'Indicates acute Hepatitis A infection.', '24 Hours', 'FlaskConical', 'Serology'),

-- Serology - Dengue & Malaria
('Dengue NS1 Antigen', 'Detects acute dengue virus in early stages.', '2 Hours', 'FlaskConical', 'Serology'),
('Dengue NS1 Antigen Card Test', 'Rapid card test for dengue NS1 detection.', '15 Minutes', 'FlaskConical', 'Serology'),
('Dengue IgG & IgM Antibodies', 'Detects dengue antibodies for past or recent infection.', '2-3 Hours', 'FlaskConical', 'Serology'),
('Dengue IgG Antibody (ELISA)', 'Measures IgG antibodies indicating past dengue infection.', '2-3 Hours', 'FlaskConical', 'Serology'),
('Dengue IgM Antibody (ELISA)', 'Measures IgM antibodies indicating acute dengue infection.', '2-3 Hours', 'FlaskConical', 'Serology'),
('Dengue Card Test', 'Rapid screening test for dengue virus (IgG/IgM/NS1).', '15 Minutes', 'FlaskConical', 'Serology'),
('RAPID Malaria Test', 'Rapid screening test for malaria parasites.', '20 Minutes', 'FlaskConical', 'Serology'),
('Malarial Parasite', 'Microscopic examination of blood for malaria parasites.', '4 Hours', 'FlaskConical', 'Serology'),

-- Serology - Typhoid & Others
('Widal Test (Agglutination)', 'Serological test for enteric fever (Typhoid and Paratyphoid).', '4 Hours', 'FlaskConical', 'Serology'),
('Widal Test IgG & IgM', 'Specific antibody detection for Salmonella typhi and paratyphi.', '24 Hours', 'FlaskConical', 'Serology'),
('Typhi DOT / Salmonella Typhi IgM/IgG', 'Rapid dot test for typhoid detection.', '30 Minutes', 'FlaskConical', 'Serology'),
('Leptospira Antibodies (IgG & IgM)', 'Detects leptospirosis infection.', '24 Hours', 'FlaskConical', 'Serology'),
('Brucella Antibodies (IgG & IgM)', 'Detects brucellosis infection.', '24 Hours', 'FlaskConical', 'Serology'),

-- Serology - Herpes & CMV
('Herpes Simplex Virus (HSV) I & II IgG', 'Indicates past or chronic HSV infection.', '24 Hours', 'FlaskConical', 'Serology'),
('Herpes Simplex Virus (HSV) I & II IgM', 'Indicates acute HSV infection.', '24 Hours', 'FlaskConical', 'Serology'),
('HSV IgG', 'IgG antibodies for HSV exposure and immunity.', '24 Hours', 'FlaskConical', 'Serology'),
('HSV IgM', 'IgM antibodies indicating acute HSV infection.', '24 Hours', 'FlaskConical', 'Serology'),
('Cytomegalovirus (CMV) IgG', 'Indicates past CMV infection and immunity.', '24 Hours', 'FlaskConical', 'Serology'),
('Cytomegalovirus (CMV) IgM', 'Indicates acute CMV infection.', '24 Hours', 'FlaskConical', 'Serology'),
('Varicella Zoster IgG', 'Indicates immunity to chickenpox and shingles.', '24 Hours', 'FlaskConical', 'Serology'),
('Varicella Zoster IgM', 'Indicates acute varicella zoster infection.', '24 Hours', 'FlaskConical', 'Serology'),
('Rubella IgG', 'Indicates immunity to rubella after vaccination or infection.', '24 Hours', 'FlaskConical', 'Serology'),
('Rubella IgM', 'Indicates acute rubella infection.', '24 Hours', 'FlaskConical', 'Serology'),

-- Serology - STDs & Others
('Anti-Chlamydia trachomatis IgG', 'Indicates past Chlamydia infection.', '24 Hours', 'FlaskConical', 'Serology'),
('Anti-Chlamydia trachomatis IgM', 'Indicates acute Chlamydia infection.', '24 Hours', 'FlaskConical', 'Serology'),
('Chikungunya Test', 'Serological test for chikungunya virus infection.', '24 Hours', 'FlaskConical', 'Serology'),
('VDRL', 'Screening test for syphilis (non-specific).', '4 Hours', 'FlaskConical', 'Serology'),
('TPHA', 'Specific test for syphilis confirmation.', '24 Hours', 'FlaskConical', 'Serology'),
('TORCH All Ten', 'Complete TORCH panel (Toxo, Rubella, CMV, HSV) for prenatal screening.', '2-3 Days', 'FlaskConical', 'Serology'),
('Anti D Titre', 'Measures Rh antibody levels during pregnancy.', '24 Hours', 'FlaskConical', 'Serology'),

-- Autoimmune Tests
('RA Factor Quantitative', 'Antibody test for Rheumatoid Arthritis diagnosis.', 'Same Day', 'FileCheck', 'Autoimmune Tests'),
('RA Factor Qualitative', 'Qualitative screening for Rheumatoid Arthritis.', 'Same Day', 'FileCheck', 'Autoimmune Tests'),
('Anti-CCP', 'Highly specific antibody for Rheumatoid Arthritis diagnosis.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('ANA (Anti-Nuclear Antibodies)', 'Screening test for autoimmune diseases like lupus.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('ANA by IFA with Titre', 'IFA method with titer for specific autoimmune disease classification.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('ANA Blot', 'Specific antibody profile for autoimmune disease identification.', '2-3 Days', 'FileCheck', 'Autoimmune Tests'),
('Anti ds-DNA', 'Antibodies against double-stranded DNA for lupus diagnosis.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti ds-DNA with Titre', 'Quantitative measurement of anti-ds-DNA antibodies.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti Phospholipid Antibodies (IgG & IgM)', 'Screen for antiphospholipid syndrome.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti Phospholipid Antibodies (IgG)', 'IgG specific test for antiphospholipid syndrome.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti Phospholipid Antibodies (IgM)', 'IgM specific test for antiphospholipid syndrome.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti Beta-2-Glycoprotein Antibodies', 'Specific antibodies for antiphospholipid syndrome.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti Cardiolipin Antibodies (ACA)', 'Antibodies for thrombosis and miscarriage risk.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti Thyroglobulin (ATG)', 'Antibodies against thyroid for thyroid disease diagnosis.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti TPO (Thyroid Peroxidase Antibodies)', 'Antibodies for thyroid autoimmune disease diagnosis.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Antithyroid Antibodies Panel (ATG + TPO)', 'Complete thyroid autoimmune screening.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('ANCA - C', 'C-ANCA for vasculitis diagnosis.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('ANCA - P & C', 'Both P and C-ANCA for complete vasculitis screening.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti-LKM Antibody', 'Antibodies for liver/kidney microsomal antigen.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti NMO Antibody', 'Antibodies for neuromyelitis optica spectrum disorder.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Anti-Sperm Antibodies (ASAB)', 'Tests for anti-sperm antibodies causing infertility.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('ASO (Anti-Streptolysin O)', 'Antibodies for recent Streptococcus infection and rheumatic fever risk.', 'Same Day', 'FileCheck', 'Autoimmune Tests'),
('Complement C3 & C4', 'Measures complement levels for autoimmune disease activity.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Complement C3', 'Measures C3 for immune complex disease assessment.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('Complement C4', 'Measures C4 for lupus and immune disease activity.', '24 Hours', 'FileCheck', 'Autoimmune Tests'),
('HLA - B 27 (Flow Cytometry)', 'Tests for HLA-B27 antigen for ankylosing spondylitis.', '2-3 Days', 'FileCheck', 'Autoimmune Tests'),
('HLA - B 27 (PCR)', 'Genetic test for HLA-B27 for autoimmune disease susceptibility.', '2-3 Days', 'FileCheck', 'Autoimmune Tests'),

-- Urine Tests
('Urine Routine Report', 'Physical, chemical and microscopic examination of urine.', '4 Hours', 'FlaskConical', 'Urine Tests'),
('Urine Albumin', 'Detects albumin in urine for kidney damage assessment.', '4 Hours', 'FlaskConical', 'Urine Tests'),
('Urine Protein', 'Quantifies protein in urine for kidney disease assessment.', '4 Hours', 'FlaskConical', 'Urine Tests'),
('Urine Microalbumin', 'Detects early kidney damage (microalbuminuria).', '24 Hours', 'FlaskConical', 'Urine Tests'),
('Microalbumin/Creatinine Ratio', 'Standardized measurement of microalbuminuria.', '24 Hours', 'FlaskConical', 'Urine Tests'),
('Spot Urine for Protein', 'Detects protein in random urine sample.', '4 Hours', 'FlaskConical', 'Urine Tests'),
('Urine Ketones', 'Detects ketones for diabetes management and metabolic assessment.', '4 Hours', 'FlaskConical', 'Urine Tests'),
('Fasting Urine Sugar', 'Detects sugar in fasting urine for diabetes screening.', '4 Hours', 'FlaskConical', 'Urine Tests'),
('Post Prandial Urine Sugar', 'Detects sugar in urine after meals.', '4 Hours', 'FlaskConical', 'Urine Tests'),
('Urine Bile Salts & Bile Pigments', 'Detects bile in urine for liver disease assessment.', '4 Hours', 'FlaskConical', 'Urine Tests'),
('Urobilinogen', 'Measures urobilinogen for liver and hemolytic disease assessment.', '4 Hours', 'FlaskConical', 'Urine Tests'),
('Urine Culture & Sensitivity', 'Identifies bacteria and determines effective antibiotics.', '48-72 Hours', 'FlaskConical', 'Urine Tests'),
('Urine for Bence Jones Proteins', 'Detects Bence Jones proteins for multiple myeloma.', '24 Hours', 'FlaskConical', 'Urine Tests'),
('Urine Pregnancy Test', 'Detects hCG in urine for pregnancy confirmation.', '30 Minutes', 'FlaskConical', 'Urine Tests'),
('24-Hour Urinary Albumin', 'Quantifies albumin loss in 24-hour urine collection.', '24 Hours', 'FlaskConical', 'Urine Tests'),
('24-Hour Urinary Calcium', 'Measures calcium excretion for stone and bone disease assessment.', '24 Hours', 'FlaskConical', 'Urine Tests'),
('24-Hour Urinary Phosphorus', 'Measures phosphorus excretion for mineral metabolism.', '24 Hours', 'FlaskConical', 'Urine Tests'),
('24-Hour Urinary Protein', 'Quantifies daily protein loss in kidney disease.', '24 Hours', 'FlaskConical', 'Urine Tests'),
('24-Hour Urinary Uric Acid', 'Measures daily uric acid excretion for gout assessment.', '24 Hours', 'FlaskConical', 'Urine Tests'),
('24-Hour Urinary VMA', 'Detects pheochromocytoma and paraganglioma.', '24 Hours', 'FlaskConical', 'Urine Tests'),
('24-Hour Urine Metanephrine', 'Measures metanephrines for pheochromocytoma screening.', '24 Hours', 'FlaskConical', 'Urine Tests'),
('Protein Creatinine Ratio (PCR)', 'Standardized measurement of proteinuria.', '4 Hours', 'FlaskConical', 'Urine Tests'),
('Creatinine Urine', 'Measures urinary creatinine for kidney function and protein standardization.', '24 Hours', 'FlaskConical', 'Urine Tests'),

-- Stool Tests
('Stool Routine', 'Examination of stool for parasites, occult blood and infection.', '4 Hours', 'FileText', 'Stool Tests'),
('Stool for Occult Blood', 'Detects hidden blood in stool for GI bleeding.', '4 Hours', 'FileText', 'Stool Tests'),
('Stool Culture & Sensitivity', 'Identifies bacteria in stool and determines antibiotics.', '48-72 Hours', 'FileText', 'Stool Tests'),
('Helicobacter Pylori Antigen (Stool)', 'Detects H. pylori in stool for gastritis diagnosis.', '24 Hours', 'FileText', 'Stool Tests'),
('Stool Analysis Report', 'Comprehensive stool examination.', '4 Hours', 'FileText', 'Stool Tests'),

-- Respiratory Tests
('Sputum Routine', 'Microscopic examination of sputum for infection.', '4 Hours', 'Activity', 'Respiratory Tests'),
('Sputum AFB (Acid-Fast Bacilli)', 'Detects Mycobacterium tuberculosis using Ziehl-Neelsen staining.', '24 Hours', 'Activity', 'Respiratory Tests'),
('Sputum for ZN Stain', 'Ziehl-Neelsen staining for tuberculosis detection.', '24 Hours', 'Activity', 'Respiratory Tests'),
('Sputum Analysis', 'Examination of sputum for TB and other infections.', '24 Hours', 'Activity', 'Respiratory Tests'),
('Sputum Culture & Sensitivity', 'Identifies bacteria in sputum and determines effective antibiotics.', '2-3 Days', 'Activity', 'Respiratory Tests'),
('Sputum Gram Stain', 'Gram staining of sputum for bacterial identification.', '2 Hours', 'Activity', 'Respiratory Tests'),

-- Body Fluid Tests
('Cerebrospinal Fluid (CSF) Examination', 'Analysis of CSF for meningitis, encephalitis and other CNS disorders.', '4 Hours', 'Droplet', 'Body Fluid Tests'),
('Ascitic Fluid Examination', 'Analysis of abdominal fluid for peritonitis, cirrhosis and malignancy.', '4 Hours', 'Droplet', 'Body Fluid Tests'),
('Pleural Fluid Examination', 'Analysis of pleural fluid for effusion cause.', '4 Hours', 'Droplet', 'Body Fluid Tests'),
('Peritoneal Fluid Examination', 'Analysis of peritoneal fluid for peritonitis and malignancy.', '4 Hours', 'Droplet', 'Body Fluid Tests'),
('Pericardial Fluid', 'Analysis of fluid from around the heart.', '4 Hours', 'Droplet', 'Body Fluid Tests'),
('Body Fluid Analysis (Other Fluids)', 'General examination of various body fluids.', '4 Hours', 'Droplet', 'Body Fluid Tests'),
('CAPD Fluid Examination', 'Analysis of continuous ambulatory peritoneal dialysis fluid.', '24 Hours', 'Droplet', 'Body Fluid Tests'),
('ABG / VBG (Blood Gas)', 'Measures blood pH, CO2, O2 and electrolytes.', '1 Hour', 'Droplet', 'Body Fluid Tests'),

-- Microbiology Tests
('Blood Culture & Sensitivity', 'Identifies bacteria in blood and determines effective antibiotics.', '48-72 Hours', 'FlaskConical', 'Microbiology Tests'),
('Bone Tissue Culture & Sensitivity', 'Identifies bacteria in bone tissue.', '2-3 Days', 'FlaskConical', 'Microbiology Tests'),
('Swab Culture & Sensitivity', 'General culture and sensitivity from various swabs.', '48-72 Hours', 'FlaskConical', 'Microbiology Tests'),
('AFB/TB Culture - MGIT', 'Rapid TB culture using mycobacterial growth indicator tube.', '2-3 Days', 'FlaskConical', 'Microbiology Tests'),
('TB Gold (IGRA)', 'IGRA test for tuberculosis exposure and active disease.', '24 Hours', 'FlaskConical', 'Microbiology Tests'),
('MTB DNA Detection (PCR)', 'PCR-based TB detection in body fluids.', '24 Hours', 'FlaskConical', 'Microbiology Tests'),
('Tuberculin Test (Mantoux)', 'Intradermal test for tuberculosis exposure.', '48-72 Hours', 'FlaskConical', 'Microbiology Tests'),
('ADA Level (Adenosine Deaminase)', 'Enzyme for TB diagnosis in body fluids.', '24 Hours', 'FlaskConical', 'Microbiology Tests'),

-- Histology Tests
('Fine Needle Aspiration Cytology (FNAC)', 'Microscopic examination of cells from needle aspiration.', '3-5 Days', 'FileText', 'Histology Tests'),
('FNAC Reporting', 'Detailed reporting of FNAC findings.', '3-5 Days', 'FileText', 'Histology Tests'),
('Cervical Smear (PAP Smear)', 'Screening test for cervical cancer in women.', '3-5 Days', 'FileText', 'Histology Tests'),
('Histopathology - Small Biopsy', 'Microscopic examination of small tissue samples.', '3-5 Days', 'FileText', 'Histology Tests'),
('Histopathology - Medium Biopsy', 'Examination of medium-sized tissue samples.', '3-5 Days', 'FileText', 'Histology Tests'),
('Histopathology - Large Biopsy', 'Examination of large tissue samples.', '3-5 Days', 'FileText', 'Histology Tests'),
('Gram Stain Report', 'Gram staining for bacterial identification.', '2 Hours', 'FileText', 'Histology Tests'),
('Alberts Stain Report', 'Special staining for bacterial morphology.', '2 Hours', 'FileText', 'Histology Tests'),
('AFB Staining', 'Acid-fast bacilli staining for tuberculosis.', '24 Hours', 'FileText', 'Histology Tests'),
('Fluid for ZN Stain', 'Ziehl-Neelsen staining of body fluids for TB.', '24 Hours', 'FileText', 'Histology Tests'),

-- Allergy Tests
('Allergy Panel', 'General allergy screening test.', '24 Hours', 'Pill', 'Allergy Tests'),
('Allergy Panel - Inhalants', 'Tests for airborne allergen sensitivity.', '24 Hours', 'Pill', 'Allergy Tests'),
('Allergy Panel - Food (Non-Veg)', 'Tests for non-vegetarian food allergies.', '24 Hours', 'Pill', 'Allergy Tests'),
('Allergy Panel - Contact', 'Tests for contact allergens and skin sensitizers.', '24 Hours', 'Pill', 'Allergy Tests'),
('Allergy Panel - Drugs', 'Tests for drug allergies.', '24 Hours', 'Pill', 'Allergy Tests'),
('Phadiatop', 'General IgE antibody screening for common allergens.', '24 Hours', 'Pill', 'Allergy Tests'),

-- Genetic Tests
('Karyotyping - Blood', 'Chromosome analysis for genetic disorders.', '2-3 Days', 'FileCheck', 'Genetic Tests'),
('Karyotyping - Blood (Husband)', 'Chromosome analysis for male fertility assessment.', '2-3 Days', 'FileCheck', 'Genetic Tests'),
('Beta Thalassemia Gene Sequencing', 'Genetic sequencing for thalassemia mutation detection.', '2-3 Days', 'FileCheck', 'Genetic Tests'),

-- Special Tests
('G6PD Estimation', 'Tests for glucose-6-phosphate dehydrogenase deficiency.', '24 Hours', 'TestTube', 'Special Tests'),
('Cholinesterase Level', 'Measures enzyme for drug metabolism assessment.', '24 Hours', 'TestTube', 'Special Tests'),
('Drug of Abuse - Alcohol (Rapid)', 'Rapid screening for alcohol in blood.', '30 Minutes', 'TestTube', 'Special Tests'),
('Carbamazepine Level', 'Measures anticonvulsant drug level for therapeutic monitoring.', '24 Hours', 'TestTube', 'Special Tests'),
('Lithium Level', 'Measures lithium for bipolar disorder medication monitoring.', '24 Hours', 'TestTube', 'Special Tests'),
('Myoglobin Urine', 'Detects muscle proteins in urine.', '24 Hours', 'TestTube', 'Special Tests'),
('Weil Felix Test', 'Heterophile antibody test for rickettsial infections.', '24 Hours', 'TestTube', 'Special Tests'),
('Semen Routine Analysis', 'Evaluates sperm count, motility and morphology.', '1 Hour', 'TestTube', 'Special Tests'),

-- Pregnancy Tests
('OGCT (Oral Glucose Challenge Test)', 'Screening test for gestational diabetes in pregnancy.', '2 Hours', 'Heart', 'Pregnancy Tests'),
('GTT (Glucose Tolerance Test)', 'Extended test for diabetes diagnosis.', '2 Hours', 'Heart', 'Pregnancy Tests'),
('Double Marker Test', 'Combined screening for Down syndrome and Edwards syndrome.', '24 Hours', 'Heart', 'Pregnancy Tests'),
('Double Marker Test Conclusion', 'Final report interpretation for prenatal screening.', '24 Hours', 'Heart', 'Pregnancy Tests'),
('Quadruple Marker', 'Four-parameter screening for chromosomal abnormalities.', '24 Hours', 'Heart', 'Pregnancy Tests'),
('Triple Marker Test', 'Three-parameter screening for trisomy 21 and neural tube defects.', '24 Hours', 'Heart', 'Pregnancy Tests'),
('Pre-Conception Profile', 'Complete health screening before pregnancy.', '2-3 Days', 'Heart', 'Pregnancy Tests'),

-- Health Packages
('Routine Health Checkup', 'Basic health screening package.', '1-2 Days', 'TestTube', 'Health Packages'),
('Specific Cardiac Profile (6 Parameters)', 'Targeted heart disease risk assessment.', '24 Hours', 'Heart', 'Health Packages'),
('Specific Cardiac Profile (7 Parameters)', 'Enhanced cardiac assessment with 7 parameters.', '24 Hours', 'Heart', 'Health Packages'),
('Master Full Body Checkup (Male)', 'Comprehensive health screening for men.', '2-3 Days', 'TestTube', 'Health Packages'),
('Master Full Body Checkup (Female)', 'Comprehensive health screening for women.', '2-3 Days', 'TestTube', 'Health Packages'),
('Woman Basic Package', 'Basic health screening for women.', '1-2 Days', 'Heart', 'Health Packages'),
('Womens Advance Package', 'Advanced health screening for women.', '2-3 Days', 'Heart', 'Health Packages');
