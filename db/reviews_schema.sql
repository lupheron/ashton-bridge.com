CREATE TABLE IF NOT EXISTS reviews (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  review TEXT NOT NULL,
  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Optional seed data (matches current site defaults)
INSERT INTO reviews (name, role, review, rating)
VALUES
  ('Tohir.A', 'Independent Trucker', 'The mechanic referral service got my truck repaired quickly and at a fair price. No more random searching online.', 5),
  ('John D.', 'Driver', 'I found my dream job through Ashton-Bridge. The platform is easy to use and the jobs are legitimate.', 5),
  ('Jane S.', 'Logistics Manager', 'Thank you to the Ashton-Bridge team for helping us improve our hiring process. The experience was smooth and reliable, and we appreciate the support.', 4);
