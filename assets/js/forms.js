// PAGE: Abuse.php
$(document).ready(function() {
  jQuery.validator.addMethod("phoneUS", function(e, r) {
      return e = e.replace(/\s+/g, ""),
      this.optional(r) || e.length > 9 && e.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)
    },
    "Please enter a valid phone number."),
    // DMCA Form
    $("#dmcaForm").validate({
      rules: {
        copyrightOwnerFullName: {
          required: !0,
          minlength: 6
        },
        fullName: {
          required: !0,
          minlength: 6
        },
        address: {
          required: !0,
          minlength: 6
        },
        phoneNumber: {
          required: !0,
          phoneUS: !0
        },
        email: {
          required: !0,
          email: !0,
          minlength: 3
        },
        digitalSignature: {
          required: !0,
          minlength: 3
        },
        infringingContent: {
          required: !0,
          minlength: 30
        },
        originalContent: {
          required: !0,
          minlength: 30
        }
      }
    });
    // Trademark Form
    $("#trademarkForm").validate({
      rules: {
        f2_fullName: {
          required: !0,
          minlength: 6
        },
        f2_address: {
          required: !0,
          minlength: 6
        },
        f2_phoneNumber: {
          required: !0,
          phoneUS: !0
        },
        f2_email: {
          required: !0,
          email: !0,
          minlength: 3
        },
        f2_trademarkedWord: {
          required: !0,
          minlength: 3
        },
        f2_registrationOffice: {
          required: !0,
          minlength: 3
        },
        f2_infringingContent: {
          required: !0,
          minlength: 30
        },
        f2_comments: {
          required: !0,
          minlength: 30
        },
        f2_digitalSignature: {
          required: !0,
          minlength: 3
        }
      }
    });
    // Spam Form
    $("#spamForm").validate({
      rules: {
        f3_fullName: {
          required: !0,
          minlength: 6
        },
        f3_email: {
          required: !0,
          email: !0,
          minlength: 3
        },
        f3_headers: {
          required: !0,
          minlength: 3
        },
        f3_messageBody: {
          required: !0,
          minlength: 3
        },
        f3_urls: {
          required: !0,
          minlength: 30
        },
        f3_digitalSignature: {
          required: !0,
          minlength: 3
        }
      }
    });
    // Phishing Form
    $("#phishingForm").validate({
      rules: {
        f4_fullName: {
          required: !0,
          minlength: 6
        },
        f4_email: {
          required: !0,
          email: !0,
          minlength: 3
        },
        f4_target: {
          required: !0,
          minlength: 3
        },
        f4_urls: {
          required: !0,
          minlength: 10
        },
        f4_logs: {
          required: !0,
          minlength: 20
        },
        f4_digitalSignature: {
          required: !0,
          minlength: 3
        }
      }
    });
    // Malware Form
    $("#malwareForm").validate({
      rules: {
        f5_fullName: {
          required: !0,
          minlength: 6
        },
        f5_email: {
          required: !0,
          email: !0,
          minlength: 3
        },
        f5_urls: {
          required: !0,
          minlength: 10
        },
        f5_logs: {
          required: !0,
          minlength: 20
        },
        f5_digitalSignature: {
          required: !0,
          minlength: 3
        }
      }
    });
    // Botnet Form
    $("#botnetForm").validate({
      rules: {
        f6_fullName: {
          required: !0,
          minlength: 6
        },
        f6_email: {
          required: !0,
          email: !0,
          minlength: 3
        },
        f6_urls: {
          required: !0,
          minlength: 10
        },
        f6_digitalSignature: {
          required: !0,
          minlength: 3
        }
      }
    });
    // Intrusion Form
    $("#intrusionForm").validate({
      rules: {
        f7_fullName: {
          required: !0,
          minlength: 6
        },
        f7_email: {
          required: !0,
          email: !0,
          minlength: 3
        },
        f7_logs: {
          required: !0,
          minlength: 10
        },
        f7_timezone: {
          required: !0,
          minlength: 10
        },
        f7_digitalSignature: {
          required: !0,
          minlength: 3
        }
      }
    });
    // Child Form
    $("#childForm").validate({
      rules: {
        f8_fullName: {
          required: !0,
          minlength: 6
        },
        f8_email: {
          required: !0,
          email: !0,
          minlength: 3
        },
        f8_urls: {
          required: !0,
          minlength: 10
        },
        f8_digitalSignature: {
          required: !0,
          minlength: 3
        }
      }
    });
    // Violent Form
    $("#violentForm").validate({
      rules: {
        f9_fullName: {
          required: !0,
          minlength: 6
        },
        f9_email: {
          required: !0,
          email: !0,
          minlength: 3
        },
        f9_urls: {
          required: !0,
          minlength: 10
        },
        f9_info: {
          required: !0,
          minlength: 10
        },
        f9_digitalSignature: {
          required: !0,
          minlength: 3
        }
      }
    });
    // Other Form
    $("#otherForm").validate({
      rules: {
        f10_fullName: {
          required: !0,
          minlength: 6
        },
        f10_email: {
          required: !0,
          email: !0,
          minlength: 3
        },
        f10_des: {
          required: !0,
          minlength: 30
        },
        f10_urls: {
          required: !0,
          minlength: 10
        },
        f10_comments: {
          required: !0,
          minlength: 10
        },
        f10_digitalSignature: {
          required: !0,
          minlength: 3
        }
      }
    });
});
/* ------------------------------------------- */

// PAGE: Login.php
$(document).ready(function() {
  // Login Form
  $("#loginForm").validate({
    rules: {
      email: {
        required: !0,
        email: !0,
        minlength: 3
      },
      password: {
        required: !0,
        minlength: 8
      }
    }
  });
});
/* ------------------------------------------- */

// PAGE: Login.php
$(document).ready(function() {
  // Register Form
  $("#registerForm").validate({
    rules: {
      name: {
        required: !0,
        minlength: 5
      },
      email: {
        required: !0,
        email: !0,
        minlength: 3
      },
      password: {
        required: !0,
        minlength: 8
      }
    }
  });
});
/* ------------------------------------------- */