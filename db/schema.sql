DROP DATABASE psych_meds_mobile;
CREATE DATABASE psych_meds_mobile;

\c psych_meds_mobile;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fname TEXT,
  lname TEXT,
  email TEXT,
  username TEXT,
  pass_digest TEXT,
  active BOOLEAN DEFAULT true,
  created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  userid INTEGER REFERENCES users(id),
  comment TEXT,
  is_deleted BOOLEAN DEFAULT false,
  created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE flagged_meds (

);
