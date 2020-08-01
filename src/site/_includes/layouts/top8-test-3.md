---
layout: layouts/html.njk
---
{{ content | safe }}

{%- for place, info in top8 %}
{%- set ordinal = loop.index | nth %}
<!-- {{ ordinal }} -->

### <span class="pre-headline {{ place }}">{{ ordinal }} place:</span> [{{ info.player }}'s Decklist]({{ info.epcUrl }}){.epc-link target="_blank"} ({{ info.archetype }})

{% card_image info.card, "ci-small"%}

{{ info.body }}

[view deck]({{ info.epcUrl }})
{.highlight}

{%- else %}
No top 8 data found!
{%- endfor %} 

{%- if articleEnd %}

{{ articleEnd }}

{% endif %}