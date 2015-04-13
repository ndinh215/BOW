-- MySQL dump 10.13  Distrib 5.6.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bow
-- ------------------------------------------------------
-- Server version	5.6.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `field`
--

LOCK TABLES `field` WRITE;
/*!40000 ALTER TABLE `field` DISABLE KEYS */;
/*!40000 ALTER TABLE `field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `field_section_relation`
--

LOCK TABLES `field_section_relation` WRITE;
/*!40000 ALTER TABLE `field_section_relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `field_section_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `field_section_relation_in_template`
--

LOCK TABLES `field_section_relation_in_template` WRITE;
/*!40000 ALTER TABLE `field_section_relation_in_template` DISABLE KEYS */;
INSERT INTO `field_section_relation_in_template` VALUES (1,1,1,NULL),(2,2,1,NULL),(3,3,1,NULL),(4,4,1,NULL),(5,5,1,NULL),(6,6,1,NULL),(7,7,1,NULL),(8,8,1,NULL),(9,9,1,NULL),(10,10,1,NULL),(11,11,1,NULL),(12,12,1,NULL),(13,13,1,NULL),(14,32,4,NULL),(15,14,1,NULL),(16,15,1,NULL),(17,16,1,NULL),(18,17,1,NULL),(19,18,1,NULL),(20,19,1,NULL),(21,20,1,NULL),(22,21,1,NULL),(23,22,1,NULL),(24,23,1,NULL),(25,24,1,NULL),(26,25,1,NULL),(27,26,1,NULL),(28,27,1,NULL),(29,28,1,NULL),(30,29,1,NULL),(31,30,1,NULL),(32,31,1,NULL),(33,33,1,''),(34,34,1,NULL),(35,35,1,NULL),(36,36,1,NULL),(37,37,1,NULL),(38,38,1,NULL),(39,39,1,NULL),(40,40,1,NULL),(41,41,1,NULL),(42,42,1,NULL),(43,43,1,NULL),(44,44,1,NULL),(45,45,1,NULL),(46,46,1,NULL),(47,47,1,NULL),(48,48,1,NULL),(49,49,1,NULL),(50,50,1,NULL),(51,51,1,NULL),(52,52,1,NULL),(53,53,1,NULL),(54,54,1,NULL),(55,55,1,NULL),(56,56,1,NULL),(57,57,1,NULL),(58,58,2,NULL),(59,59,2,NULL),(60,60,2,NULL),(61,61,2,NULL),(62,62,2,NULL),(63,63,2,NULL),(64,64,2,NULL),(65,65,2,NULL),(66,66,2,NULL),(67,67,2,NULL),(68,68,2,NULL),(69,69,2,NULL),(70,70,2,NULL),(71,71,2,NULL),(72,72,2,NULL),(73,73,2,NULL),(74,74,2,NULL),(75,75,2,NULL),(76,76,2,NULL),(77,77,2,NULL),(78,78,2,NULL),(79,79,2,NULL),(80,80,2,NULL),(81,81,2,NULL),(82,82,2,NULL),(83,83,2,NULL),(84,84,2,NULL),(85,85,2,NULL),(86,86,2,NULL),(87,87,2,NULL),(88,88,2,NULL),(89,89,2,NULL),(90,90,2,NULL),(91,91,3,NULL),(92,92,3,NULL),(93,93,3,NULL),(94,94,2,NULL),(95,95,2,NULL),(96,96,2,NULL),(97,97,2,NULL),(98,98,2,NULL),(99,99,2,NULL),(100,100,2,NULL),(101,101,2,NULL),(102,102,2,NULL),(103,103,2,NULL),(104,104,3,NULL),(105,105,3,NULL),(106,106,3,NULL),(107,107,3,NULL),(108,108,3,NULL),(109,109,3,NULL),(110,110,3,NULL),(111,111,3,NULL),(112,112,3,NULL),(114,114,3,NULL),(115,115,3,NULL),(116,116,3,NULL),(117,117,3,NULL),(118,118,3,NULL),(119,119,3,NULL),(120,120,3,NULL),(121,121,3,NULL),(122,122,3,NULL),(123,123,3,NULL),(124,124,3,NULL),(125,125,1,NULL),(126,126,1,NULL),(127,127,1,NULL),(128,128,1,NULL),(129,129,2,NULL),(130,130,2,NULL),(131,131,2,NULL),(132,132,2,NULL),(133,133,2,NULL),(134,134,2,NULL),(135,135,3,NULL),(136,136,3,NULL),(137,137,3,NULL),(138,138,3,NULL),(139,139,3,NULL),(140,140,3,NULL),(141,141,4,NULL),(142,142,4,NULL),(143,143,4,NULL),(144,144,4,NULL),(145,145,4,NULL),(146,146,4,NULL);
/*!40000 ALTER TABLE `field_section_relation_in_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `field_template`
--

LOCK TABLES `field_template` WRITE;
/*!40000 ALTER TABLE `field_template` DISABLE KEYS */;
INSERT INTO `field_template` VALUES (1,'Text','Revenue Increased','Revenue Increased','revenue-increased'),(2,'Text','No. Of Advertiser','No. Of Advertiser','no-of-advertiser'),(3,'Text','Average Revenue Per Advertiser','Average Revenue Per Advertiser','average-revenue-per-advertiser'),(4,'Text','Closing Rate','Closing Rate','closing-rate'),(5,'Text','Leads Conversion Rate','Leads Conversion Rate','leads-conversion-rate'),(6,'Text','Campaign Period','Campaign Period','campaign-period'),(7,'Text','Leads','Leads','leads'),(8,'Text','Traffic Required','Traffic Required','traffic-required'),(9,'Text','Monthly Traffic','Monthly Traffic','monthly-traffic'),(10,'Text','Avg. Cost Per Click','Avg. Cost Per Click','avg-cost-per-click'),(11,'Text','Estimated Monthly Budget','Estimated Monthly Budget','estimated-monthly-budget'),(12,'Text','Total Campaign Budget','Total Campaign Budget','total-campaign-budget'),(13,'Text','Nationwide','Nationwide','nationwide'),(14,'Text','Kuala Lumpur','Kuala Lumpur','kuala-lumpur'),(15,'','Klang Valley','Klang Valley','klang-valley'),(16,'','Perlis','Perlis','perlis'),(17,'','Kedah','Kedah','kedah'),(18,'','Kelantan','Kelantan','kelantan'),(19,'','Penang','Penang','penang'),(20,'','Perak','Perak','perak'),(21,'','Terengganu','Terengganu','terengganu'),(22,'','Pahang','Pahang','pahang'),(23,'','Negeri Sembilan','Negeri Sembilan','negeri-sembilan'),(24,'','Melaka','Melaka','melaka'),(25,'','Johor','Johor','johor'),(26,'','Sabah','Sabah','sabah'),(27,'','Sarawak','Sarawak','sarawak'),(28,'','Thailand','Thailand','thailand'),(29,'','Singapore','Singapore','singapore'),(30,'','Indonesia','Indonesia','indonesia'),(31,'','GEOGRAPHICAL COVERAGE Other','GEOGRAPHICAL COVERAGE Other','geo-others'),(32,'','Proposed Keyword','Proposed Keyword','proposed-keyword'),(33,'','Accounting/Finance','Accounting/Finance','accounting-finance'),(34,'','Admin/HR','Admin/HR','admin-hr'),(35,'','Arts/Communication','Arts/Communication','arts-communication'),(36,'','Building/Construction','Building/Construction','building-construction'),(37,'','Computer/IT','Computer/IT','computer-it'),(38,'','Education/Training','Education/Training','education-training'),(39,'','Engineering','Engineering','engineering'),(40,'','Healthcare','Healthcare','healthcare'),(41,'','Hotel/Restaurant','Hotel/Restaurant','hotel-restaurant'),(42,'','Manufacturing','Manufacturing','manufacturing'),(43,'','Sales/Marketing','Sales/Marketing','sales-marketing'),(44,'','Science','Science','science'),(45,'','Services','Services','services'),(46,'','Target Other','Target Other','target-other'),(47,'','English','English','lang-english'),(48,'','Malay','Malay','lang-malay'),(49,'','Chinese','Chinese','lang-chinese'),(50,'','Tamil','Tamil','lang-tamil'),(51,'','Others','Others','lang-others'),(52,'','18 - 29','18 - 29','age-18-29'),(53,'','30 - 49','30 - 49','age-30-49'),(54,'','50 - 64','50 - 64','age-50-64'),(55,'','Others','Age Others','age-others'),(56,'','Male','Male','male'),(57,'','Female','Female','female'),(58,'','Malaysia PanPages','Malaysia PanPages','campaign-malaysia-panpages'),(59,'','Google AdWords Search & Mobile','Google AdWords Search & Mobile','campaign-google-adwords-search-mobile'),(60,'','Google Display Network','Google Display Network','campaign-google-display-network'),(61,'','Yahoo! Search','Yahoo! Search','campaign-yahoo-search'),(62,'','Yahoo! Display','Yahoo! Display','campaign-yahoo-display'),(63,'','YouTube Ads','YouTube Ads','campaign-youtube-ads'),(64,'','Facebook Ads','Facebook Ads','campaign-facebook-ads'),(65,'','Pan 360°','Pan 360°','campaign-pan-360'),(66,'','Alibaba.com ','Alibaba.com ','campaign-alibaba-com'),(67,'','Super Pages','Super Pages','campaign-super-pages'),(68,'','Enhance Text Content','Enhance Text Content','enhance-text-content'),(69,'','Add On Relevant Product Picture','Add On Relevant Product Picture','add-on-relevant-product-picture'),(70,'','Add On Product Description','Add On Product Description','add-on-product-description'),(71,'','Include Product Price','Include Product Price','include-product-price'),(72,'','Include Product Specification','Include Product Specification','include-product-specification'),(73,'','Include Company Details','Include Company Details','include-company-details'),(74,'','Include Delivery Information','Include Delivery Information','include-delivery-information'),(75,'','Include Payment Options','Include Payment Options','include-payment-options'),(76,'','Frequently Your Website','Frequently Your Website','frequently-your-website'),(77,'','Timely Response To Enquiry','Timely Response To Enquiry','timely-response-to-enquiry'),(78,'','Tracking On Calls & Walk In','Tracking On Calls & Walk In','tracking-on-calls-walk-in'),(79,'','Highlight Unique Selling Point','Highlight Unique Selling Point','highlight-unique-selling-point'),(80,'','Include Certification For Better Credential','Include Certification For Better Credential','include-certification-for-better-credential'),(81,'','Enhance Product Picture Quality','Enhance Product Picture Quality','enhance-product-picture-quality'),(82,'','PLAN FOR IMPROVEMENT Others','PLAN FOR IMPROVEMENT Others','plan-for-improvement-others'),(83,'','Increase Website Traffic','Increase Website Traffic','increase-website-traffic'),(84,'','Increase Brand Awareness','Increase Brand Awareness','increase-brand-awareness'),(85,'','Increase Online Forms Submission','Increase Online Forms Submission','increase-online-forms-submission'),(86,'','Increase Store Visits','Increase Store Visits','increase-store-visits'),(87,'','Increase Phones Calls','Increase Phones Calls','increase-phones-calls'),(88,'','Increase Online Purchase','Increase Online Purchase','increase-online-purchase'),(89,'','Retargeting Visitors','Retargeting Visitors','retargeting-visitors'),(90,'','Increase Geographical Coverage','Increase Geographical Coverage','increase-geographical-coverage'),(91,'','Option A','Option A','option-a'),(92,'','Option B','Option B','solutioption-b'),(93,'','Malaysia PanPages','Malaysia PanPages','option-a-malaysia-panpages'),(94,'','Yahoo! Search','Yahoo! Search','solutions-yahoo-search'),(95,'','Yahoo! Display','Yahoo! Display','solutions-yahoo-display'),(96,'','YouTube Ads','YouTube Ads','solutions-youtube-ads'),(97,'','Facebook Ads','Facebook Ads','solutions-facebook-ads'),(98,'','Pan 360°','Pan 360°','solutions-pan-360'),(99,'','Alibaba.com','Alibaba.com','solutions-alibaba-com'),(100,'','Super Pages','Super Pages','solutions-super-pages'),(101,'','Malaysia PanPages','Malaysia PanPages','solutions-malaysia-panpages'),(102,'','Google AdWords Search & Mobile','Google AdWords Search & Mobile','ons-google-adwords-search-mobile'),(103,'','Google Display Network','Google Display Network','solutions-google-display-network'),(104,'','Google AdWords Search & Mobile','Google AdWords Search & Mobile','option-a-google-adwords-search-mobile'),(105,'','Google Display Network','Google Display Network','option-a-google-display-network'),(106,'','Yahoo! Search','Yahoo! Search','option-a-yahoo-search'),(107,'','Yahoo! Display','Yahoo! Display','option-a-yahoo-display'),(108,'','YouTube Ads','YouTube Ads','option-a-youtube-ads'),(109,'','Facebook Ads','Facebook Ads','option-a-facebook-ads'),(110,'','Pan 360°','Pan 360°','option-a-pan-360'),(111,'','Alibaba.com','Alibaba.com','option-a-alibaba-com'),(112,'','Super Pages','Super Pages','option-a-super-pages'),(113,'','Others','Others','option-a-others'),(114,'','Malaysia PanPages','Malaysia PanPages','option-b-malaysia-panpages'),(115,'','Google AdWords Search & Mobile','Google AdWords Search & Mobile','option-b-google-adwords-search-mobile'),(116,'','Google Display Network','Google Display Network','option-b-google-display-network'),(117,'','Yahoo! Search','Yahoo! Search','option-b-yahoo-search'),(118,'','Yahoo! Display','Yahoo! Display','option-b-yahoo-display'),(119,'','YouTube Ads','YouTube Ads','option-b-youtube-ads'),(120,'','Facebook Ads','Facebook Ads','option-b-facebook-ads'),(121,'','Pan 360°','Pan 360°','option-b-pan-360'),(122,'','Alibaba.com','Alibaba.com','option-b-alibaba-com'),(123,'','Super Pages','Super Pages','option-b-super-pages'),(124,'','Others','Others','option-b-others'),(125,'','Others Countries','Others Countries','geo-others-text'),(126,'','Super Pages','Super Pages','option-b-super-pages'),(127,'','Preferred Language Others','Preferred Language Others','lang-others-text'),(128,'','Age Others','Age Others','age-others-text'),(129,'','2014 Advertising Investment','2014 Advertising Investment','2014-advertising-investment'),(130,'','Website Visits','Website Visits','website-visits'),(131,'','Clicks On Ads','Clicks On Ads','clicks-on-ads'),(132,'','Click Through Rate','Click Through Rate','click-through-rate'),(133,'','Plan for improvement others','Plan for improvement others','plan-for-improvement-others-text'),(134,'','Remarks','Remarks','remarks'),(135,'','Advertiser','Advertiser','advertiser'),(136,'','Address','Address','address'),(137,'','Proposal Date','Proposal Date','proposal-date'),(138,'','Valid Until','Valid Until','valid-until'),(139,'','Proposed Amount','Proposed Amount','proposed-amount'),(140,'','Terms & Conditions','Terms & Conditions','terms-conditions'),(141,'','Total Est. Impressions (100% Share of Voice)','Total Est. Impressions (100% Share of Voice)','total-est-impressions'),(142,'','Average Cost per Click','Average Cost per Click','average-cost-per-click'),(143,'','Est. Clicks Assuming 3% CTR (100% Share of Vo','Est. Clicks Assuming 3% CTR (100% Share of Vo','est-clicks-assuming'),(144,'','Est. Monthly Investment (100% Share of Voice)','Est. Monthly Investment (100% Share of Voice)','est-monthly-investment-100'),(145,'','Est. Monthly Investment (50% Share of Voice)','Est. Monthly Investment (50% Share of Voice)','est-monthly-investment-50'),(146,'','Assumed CTR for Search','Assumed CTR for Search','assumed-ctr-for-search');
/*!40000 ALTER TABLE `field_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `section`
--

LOCK TABLES `section` WRITE;
/*!40000 ALTER TABLE `section` DISABLE KEYS */;
/*!40000 ALTER TABLE `section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `section_survey_relation`
--

LOCK TABLES `section_survey_relation` WRITE;
/*!40000 ALTER TABLE `section_survey_relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `section_survey_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `section_survey_relation_in_template`
--

LOCK TABLES `section_survey_relation_in_template` WRITE;
/*!40000 ALTER TABLE `section_survey_relation_in_template` DISABLE KEYS */;
INSERT INTO `section_survey_relation_in_template` VALUES (1,1,1,NULL),(2,2,1,NULL),(3,3,1,NULL),(4,4,1,NULL);
/*!40000 ALTER TABLE `section_survey_relation_in_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `section_template`
--

LOCK TABLES `section_template` WRITE;
/*!40000 ALTER TABLE `section_template` DISABLE KEYS */;
INSERT INTO `section_template` VALUES (1,'2015 ADVERTISING PLANNER',NULL,'2015 ADVERTISING PLANNER','advertising-planner'),(2,'MARKETING REVIEW & STRATEGY',NULL,'MARKETING REVIEW & STRATEGY','marketing-review-strategy'),(3,'2015 INVESTMENT PLAN',NULL,'2015 INVESTMENT PLAN','investment-plan'),(4,'PROPOSED KEYWORDS',NULL,'PROPOSED KEYWORDS','proposed-keyword');
/*!40000 ALTER TABLE `section_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `survey`
--

LOCK TABLES `survey` WRITE;
/*!40000 ALTER TABLE `survey` DISABLE KEYS */;
/*!40000 ALTER TABLE `survey` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `survey_template`
--

LOCK TABLES `survey_template` WRITE;
/*!40000 ALTER TABLE `survey_template` DISABLE KEYS */;
INSERT INTO `survey_template` VALUES (1,'The First Report','The First Report',NULL,'the-first-report');
/*!40000 ALTER TABLE `survey_template` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-04-13 18:04:25
