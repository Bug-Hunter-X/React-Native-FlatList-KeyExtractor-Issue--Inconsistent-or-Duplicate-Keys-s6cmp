# React Native FlatList KeyExtractor Issue: Inconsistent or Duplicate Keys

This repository demonstrates a common yet easily overlooked issue in React Native when using FlatList or SectionList components: the improper management of keys within the `keyExtractor` prop.  Incorrect key usage can lead to frustrating rendering problems.

The `bug.js` file showcases the problematic code.  The `bugSolution.js` demonstrates the correct way to handle keys.

## Problem

Using duplicate or inconsistent keys in the `keyExtractor` of a FlatList or SectionList can cause the component to render incorrectly, flicker unexpectedly, or fail to update properly as the underlying data changes.

## Solution

Ensure that the `keyExtractor` function always returns a unique string for each item in the data array.  The best approach is usually to use a unique identifier (UUID) or a combination of fields that guarantees uniqueness.

## Usage

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Open and run `bug.js` to see the issue.
4. Open and run `bugSolution.js` to see the corrected implementation.