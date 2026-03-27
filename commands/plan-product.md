# /plan-product

Define your product through an interactive conversation. Creates documentation that both agent-os and design-os can use as their starting point. All output goes to the project's **memory** — not in-repo. Run `/distill` afterward to produce lean in-repo docs.

## Process

Read and follow the full plan-product process. Find it at one of these locations (check in order):

1. `commands/plan-product.md` (if this project is work-work itself)
2. `${WORK_WORK_DIR}/commands/plan-product.md` (work-work installation)

The full command handles:
1. Resolving the project slug and memory path
2. Running the agent-os interactive product definition flow
3. Generating design-os compatible files (product-overview, product-roadmap, data-shape)
4. Writing all output to `${MEMORY_PROJECT_DIR}/product/`
5. Suggesting `/distill` to sync lean docs to the repo
