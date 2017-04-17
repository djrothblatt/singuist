# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tracks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
lyrics          | text      | not null
description     | text      | 
language        | string    | 
artist          | string    | 

## annotations
column name     | data type | details
----------------|-----------|-------------------------------
id              | integer   | not null, primary key
track_id        | integer   | not null, indexed, foreign key
user_id         | integer   | not null, indexed, foreign key
body            | text      | not null
start_index     | integer   | not null
end_index       | integer   | not null

## comments
column name     | data type | details
----------------|-----------|-------------------------------
id              | integer   | not null, primary key
track_id        | integer   | indexed, foreign key
annotation_id   | integer   | indexed, foreign key
body            | text      | not null
start_index     | integer   | not null
end_index       | integer   | not null

## upvotes
column name     | data type | details
----------------|-----------|-------------------------------
id              | integer   | not null, primary key
annotation_id   | integer   | indexed, foreign key
comment_id      | integer   | indexed, foreign key
user_id         | integer   | not null, indexed, foreign key
