Feature: QCharge - Android

  @ANDROID @REGRESSION @ONBOARDING
  Scenario: Onboarding - Swipe Action and Üye Olmadan Kesfet Function
    * restart the app
    * i see "QCharge’a Hoşgeldiniz!" text
    * click "SPLASH_SCREEN_BASLA_BUTTON"
    * i see "Haritadan Şarj İstasyonu Seçin" text
    * i see "SPLASH_SCREEN_ATLA_BUTTON" element
    * i cant see "SPLASH_SCREEN_BASLA_BUTTON" element
    * swipe right
    * i see "Ödeme Yöntemi Ekleyin" text
    * i see "SPLASH_SCREEN_ATLA_BUTTON" element
    * i cant see "SPLASH_SCREEN_BASLA_BUTTON" element
    * swipe right
    * i see "Soketi Takarak Hızlıca Şarja Başlayın!" text
    * i cant see "SPLASH_SCREEN_ATLA_BUTTON" element
    * i see "SPLASH_SCREEN_BASLA_BUTTON" element
    * swipe left
    * i see "Ödeme Yöntemi Ekleyin" text
    * i see "SPLASH_SCREEN_ATLA_BUTTON" element
    * i cant see "SPLASH_SCREEN_BASLA_BUTTON" element
    * swipe right
    * i see "Soketi Takarak Hızlıca Şarja Başlayın!" text
    * click "SPLASH_SCREEN_BASLA_BUTTON"
    * i see "SIGN_UP_UYE_OLMADAN_KESFET_BUTTON" element
    * i see "SIGN_UP_DEVAM_ET_BUTTON" element
    * click "SIGN_UP_UYE_OLMADAN_KESFET_BUTTON"
    #  * try click 'PERMISSION_LOCATION_WHILE_USING_THE_APP'
    * i see "HOME_AC_FILTER" element
    * click "NAVBAR_ACCOUNT"
  #  * i see "PROFIL_UYE_OL_VEYA_GIRIS_YAP_BUTTON" element

  @ANDROID @REGRESSION @ONBOARDING
  Scenario: Onboarding - Skip with Atla Button
    * open app
    * i see "QCharge’a Hoşgeldiniz!" text
    * click "SPLASH_SCREEN_BASLA_BUTTON"
    * i see "Haritadan Şarj İstasyonu Seçin" text
    * click "SPLASH_SCREEN_ATLA_BUTTON"
    * i see "SIGN_UP_UYE_OLMADAN_KESFET_BUTTON" element
    * i see "SIGN_UP_DEVAM_ET_BUTTON" element
    * click "SIGN_UP_UYE_OLMADAN_KESFET_BUTTON"
    * i see "HOME_AC_FILTER" element
    * click "NAVBAR_ACCOUNT"
  #  * i see "PROFIL_UYE_OL_VEYA_GIRIS_YAP_BUTTON" element


  @ANDROID @ONBOARDING @ONBOARDING @test
  Scenario: Onboarding - App is called from background and killed
    * open app
    * i see "QCharge’a Hoşgeldiniz!" text
    * click "SPLASH_SCREEN_BASLA_BUTTON"
    * i see "Haritadan Şarj İstasyonu Seçin" text
    * app goes to background
    * wait 2 second
    * i cant see "Haritadan Şarj İstasyonu Seçin" text
    * app goes to foreground
    * wait 2 second
    * i see "Haritadan Şarj İstasyonu Seçin" text
    * kill app
    * i cant see "Haritadan Şarj İstasyonu Seçin" text
    * open app
    * i see "QCharge’a Hoşgeldiniz!" text
    * allow location permission
    * click "SPLASH_SCREEN_BASLA_BUTTON"
    * click "SPLASH_SCREEN_ATLA_BUTTON"
    * i see "SIGN_UP_UYE_OLMADAN_KESFET_BUTTON" element
    * i see "SIGN_UP_DEVAM_ET_BUTTON" element
    * click "SIGN_UP_UYE_OLMADAN_KESFET_BUTTON"
    * i see "HOME_AC_FILTER" element
