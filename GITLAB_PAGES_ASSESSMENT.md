# GitLab Pages Assessment

## Summary

This repository can be hosted well on GitLab Pages, but the current deployment layout does not follow GitLab's recommended pattern for a static site.

The main issue is that the Pages job publishes the repository structure instead of a clean website artifact. As a result, the deployed root does not contain a root `index.html`, which is a likely reason for the `404` on the Pages URL.

## Current Findings

### 1. Publish root does not contain `index.html`

The current CI config copies the full repository into `public/`:

```yaml
pages:
  stage: deploy
  script:
    - mkdir .public
    - cp -r * .public
    - mv .public public
  publish: public
```

However, the real homepage is located at `html/index.html`, not at the repository root. This means the published output contains `public/html/index.html`, but not `public/index.html`.

### 2. Deployment publishes too much content

Publishing the entire repository exposes non-site material in the Pages artifact, including:

- contributor documentation
- formatting templates
- legacy files
- old content
- the `FAIRSpace-Cologne.github.io/` directory

Best practice is to publish only the website artifact.

### 3. CI syntax is outdated

The current config uses top-level `publish: public`. GitLab now recommends:

- `pages: true` for the default `public/` directory, or
- `pages: { publish: <folder> }` for a custom publish folder

GitLab also prefers `rules:` over `only:`.

### 4. Repository documentation does not match deployed URL structure

Documentation currently refers to URLs like:

- `content-page.html?page=...`

But with the current deployment layout, those files are actually under:

- `html/content-page.html?page=...`

So the docs and deployment output are inconsistent.

### 5. Apache configuration is not relevant on GitLab Pages

The repository contains `htaccess`, but GitLab Pages does not use Apache `.htaccess` processing. That file does not help with routing or fixing the `404`.

## Alignment With GitLab Best Practices

### Already aligned

- The site is static, which fits GitLab Pages well.
- The deployment is intended to happen from the default branch.
- Most website links are relative, which is good for project Pages hosting.

### Not aligned

- No root `index.html` in the published site artifact.
- Whole repository is published instead of a build output folder.
- Deprecated Pages syntax is used.
- Documentation does not reflect the deployed path layout.

## Best-Practice Recommendation For This Repository

The repository does fit GitLab Pages well. There is no strong technical reason it cannot follow best practice.

The only valid reason for the current structure is organizational: the repo mixes site source files, Markdown content, docs, and older material. That is fine for source control, but it means CI should assemble a proper deploy artifact instead of publishing the repo root directly.

## Recommended Changes

### Recommended target outcome

Publish a clean site root that contains:

- `index.html`
- `content-page.html`
- `css/`
- `js/`
- `images/`
- `pages/`

### Recommended implementation

1. Keep the source files organized in the repo as needed.
2. In CI, create a dedicated `public/` folder containing only the live website.
3. Put the actual website entry files at the root of `public/`.
4. Update asset and Markdown paths if HTML files are moved out of `html/`.
5. Replace deprecated Pages syntax with the modern GitLab Pages job format.

## Example Direction For CI

One clean approach is:

- copy `html/index.html` to `public/index.html`
- copy `html/content-page.html` to `public/content-page.html`
- copy supporting asset directories into `public/`
- deploy `public/` with a modern Pages job

## Suggested Next Step

If this repository should continue using GitLab Pages as the main hosting method, the best next change is to redesign `.gitlab-ci.yml` so it publishes a proper site artifact instead of the repository root.
