create schema if not EXISTS workshop;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

create table if not EXISTS workshop.author (
  id UUID default uuid_generate_v1mc(),
  name text NOT NULL,
  PRIMARY KEY (id)
);

create table if NOT EXISTS workshop.article (
  id UUID default uuid_generate_v1mc(),
  title text default null,
  description text default null,
  content JSONB default null,
  author_id UUID not null REFERENCES workshop.author(id),
  PRIMARY KEY (id)
);

insert into workshop.author (name) VALUES ('Jens');

insert into workshop.article (title, description, content, author_id) VALUES (
    'My First Article',
    'This article is awesome!',
    '{"bigButton":"on my desk"}',
    (select id from workshop.author where name = 'Jens')
);

insert into workshop.article (title, description, content, author_id) VALUES (
  'My Second Article',
  'This article is awesome too! amazing!!',
  '{"thisButton":"even Bigger!"}',
  (select id from workshop.author where name = 'Jens')
);