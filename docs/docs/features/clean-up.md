---
title: Clean up
description: Review merged worktrees and branches before removing them.
---

# Clean up

When Salience finds eligible merged worktrees or local branches in a project, a **Clean up** pill appears in the titlebar. Open it to review separate lists for worktrees and branches. The worktree list can show disk space they use; missing sizes are measured when you open the pill.

## What appears

Salience checks that a candidate still points to the recorded head of a merged pull request. A worktree must also have a known clean working tree with no untracked files. The project's main checkout, locked worktrees, and worktrees whose state is unknown are left out.

A local branch is left out if it is current, checked out in a worktree, or used as a pull request base. These checks keep the list focused on merged work that appears ready for your review; they are a snapshot of what Salience currently knows.

## Remove what you choose

Choose **Remove worktrees** or **Delete branches** to open a terminal with the corresponding command prefilled. Read it, then press Enter to run it. You can remove worktrees while keeping their branches, or keep the worktrees and delete other branches. Salience does not execute removal from the pill.

The branch command checks again when you run it that the branch has not advanced beyond the merged pull request head. If it has moved, the command keeps it.

![The Clean up menu with a merged branch candidate](/concepts/concepts-clean-up.png)
