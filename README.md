# ADMIN-MANAGMENT SYSTEM

# ADMIN {
    login,
    manage sub-admin,
    verify sub-admin,
    manage dashbord,
    manage payment,
    manage student,
    verify student,
},

# STUDENT {
    sign up,
    login,
    edit profile,
    feedback,
    fees-payment,
    document uploading,
    download document,

},



##### TABLES #####

# SIGN-UP // LOGIN-TABLE {
    name,
    enrollmet,
    password,
    branch,
    sem,
}

# ADMIN-TABLE {
    id,
    pass,
}

# STUDENT-TABLE {
    name,
    enrollment,
    pass,
    branch,
    sem,
}

# FEES-TABLE {
    name,
    enrollment,
    branch,
    sem,
    role (role1: pending fees, role2: complete fees),
}

# BONAFITE-TABLE {
    name,
    enrollment,
    branch,
    class (ex: a,b,c)
    sem,
}