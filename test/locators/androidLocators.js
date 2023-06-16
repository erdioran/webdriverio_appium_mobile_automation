class androidLocators {
    constructor() {
      this.TAMAM_BUTTON = 'Tamam';
      this.DEVAM_ET_BUTTON = 'Devam Et';
      this.LOGIN_LANGUAGE_TURKCE = 'Türkçe';
      this.LOGIN_ULKE_KODU_TR = 'Ülke Kodu\n+90';
      this.LOGIN_TELEFON_NO_INPUT = 'android.widget.EditText';
      this.LOGIN_OTP_INPUT = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[5]';
      this.LOGIN_OTP_KODU_TEKRAR_GONDER = 'Kodu Tekrar Gönder';
      this.LOGIN_REGISTER_BACK_BUTTON = 'android.widget.ImageView';
      this.NAVBAR_HOME = 'Home';
      this.NAVBAR_WALLET = '(//android.widget.ImageView[@content-desc="Wallet"])[2]';
      this.NAVBAR_SCAN = '(//android.widget.ImageView[@content-desc="Wallet"])[1]';
      this.NAVBAR_TRANSACTIONS = 'Transactions';
      this.NAVBAR_ACCOUNT = '(//android.widget.ImageView[@content-desc="Wallet"])[3]';
      this.SPLASH_SCREEN_BASLA_BUTTON = '//android.widget.Button[@content-desc="Başla"]';
      this.SPLASH_SCREEN_ATLA_BUTTON = '//android.widget.ImageView[@content-desc="Atla"]';
      this.PERMISSION_LOCATION_WHILE_USING_THE_APP = 'com.android.permissioncontroller:id/permission_allow_foreground_only_button';
      this.PROFIL_UYE_OL_VEYA_GIRIS_YAP_BUTTON = '';
      this.SIGN_UP_UYE_OLMADAN_KESFET_BUTTON = '//android.widget.ImageView[@content-desc="Üye Olmadan Keşfet"]';
      this.SIGN_UP_DEVAM_ET_BUTTON = '//android.widget.ImageView[@content-desc="Üye Olmadan Keşfet"]';
      this.HOME_AC_FILTER = 'AC';
    }
  }
  
  module.exports = new androidLocators();