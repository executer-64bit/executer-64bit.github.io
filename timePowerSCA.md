# Timing & Power Side Channel Analysis.

_As part of the course's project of Hardware Security Spring 2026 at EURECOM by [professor Renaud Pacalet](https://perso.telecom-paristech.fr/pacalet/index_en.html)_

As part of confidentiality, many different types of cryptography algorithms exist. Their beauty is that instead of protecting the whole messages and the algorithms, only the keys must be protected and usually the keys' sizes are lower (by far) than the messages' sizes. It makes them feasible for implementing in the systems. However, the keys may be still leaked by analyzing the physical parameters and behavior of the cryptosystem. So, developers should consider the protection of those side channels. This article will explain how by analyzing the behavior of the time and power, keys can be extracted, but before going there, the DES (Data Encryption Standard) crypto algorithm will be explained as it is the victim in both scenarios.

## Brief explication of DES (the victim system).

## Explication of professor's API for carrying these analysis.

## Side Channel Analysis with Timing against DES.

## Side Channel Analysis with Power against DES.

