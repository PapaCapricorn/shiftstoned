# Shiftstoned.com

Player resources for [Eternal](https://direwolfdigital.com/eternal/) card game.

This is the source code for the website https://www.shiftstoned.com/. If you are interested in contributing improvements to the site, thanks! We would love to hear from you. Please message [@shiftstoned on Twitter](https://twitter.com/shiftstoned) for direct queries.

## Development Guide

Shiftstoned serves static HTML via Github pages. One day we may add a back-end, but for now we prefer to keep it simple. Shiftstoned automatically builds and updates with changes to this repository's `master` branch.

The exception is the [Eternal Power Calculator](https://www.shiftstoned.com/epc/) &mdash; while the card data is updated here, the Calculator's coding is maintained in a [separate repository](https://github.com/matt-kimball/epc).

### Updating EPC cards

Update cards' data by editing EPC's card data in the [epc/cardlist file](/src/site/_includes/partials/epc/cardlist.njk), between the `<script>` tags.

Each card's data is on a separate line, with semicolon-separated fields in the following format:

```
<SetID #cardnumber>; <cost + influence requrements>; <max power increase + influence gains>; <name>; <tags>
```

For example,

```
Set7 #184; 1TS;; Xenan Insignia; power, conditional
Set7 #196;; 2JS; Eloz's Choice;
```

Fields may be left empty where not applicable (keep the semicolon).

Relevant tags are:
- `power` for power-type cards
- `undepleted` for power that is always undepleted when played
- `depleted` for power that is always depleted when played
- `conditional` for power that is sometimes deplated when played
- `monument` specifically for the Monuments power cycle
- `waystone` specifically for the Waystones power cycle
- `crest` specifically for the Crests power cycle
- `standard` specifically for the Standards power cycle

### Upgrading EPC

There are two options for handling this step.

- The first is to manually build EPC (see instructions in the EPC repo's README), then copy/paste the built files into shiftstoned's /epc directory.
- The second way it to run a bash script, either `upgrade-epc.sh` or `upgrade-epc-beta.sh`. You will need `git` and `npm` available, as well as any other build dependencies of EPC. This will download either the beta or master version of epc as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules), build it, and automatically copy over the files. You will still need to use git to commit the changes, and please take this opportunity to do a final check to make sure everything worked properly (double check that you didn't clobber changes to the index.html, especially). If you push to master, you have deployed to production, so be careful.
