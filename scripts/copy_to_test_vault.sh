#!/bin/bash

vault_path=test_vault/.obsidian/plugins/checklists

# incase the plugin directory does not exist yet
mkdir -p $vault_path

cp -r build/*.js $vault_path/
cp manifest.json $vault_path/