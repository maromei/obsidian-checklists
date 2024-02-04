#!/bin/bash

vault_path=test_vault/.obsidian/plugins/checklists

if [ -d "$vault_path" ]; then
    rm -r $vault_path
fi

mkdir -p $vault_path

cp -r build/* $vault_path/
cp manifest.json $vault_path/manifest.json