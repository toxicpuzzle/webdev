# What is Sonar

A tool for visualising various timing points in the order execution lifecycle.

INSERT COPY OF WIKI DOCS Here - Include the user
documentation part.

# How to use this tool

# Vision for tool

1. Configs currently in frontend should become fully market agnostic only, and that
we have a piplein to process any/all configs from market specific data i.e. backend 
will give data used by frontend to auto generate configs for e.g. hovering e.t.c.

# Extending Sonar 

Guide on how to add market specific features with an example e.g. mapping from data to matching engine by
instrument for XNSE. 

## Backend Changes

1. Add specific route - For matching engine add directory
containing data processing logic for obtaining the mapping of inserts/deletes/trades to their matching engine
 - Mapping - From queried data to specific.plots.traces datatype, i.e. x[], y[], apiAccessKeys[]
 - Access keys - provide string access key in format similar to Korea broker routes table so frontend knows what kinds of original data the trace point points to 
 e.g. for hover tooltip, hover effects e.t.c.
  - if data is market specific and not agnostic, append specific data to the plots section.
    - For aggregations to work - will need to follow 'aggregables' interface specifiied by frontend (and in AGG_KEYS constant), or if you want to aggregate on other aspects for this datatype, then frontend will need aggregation table.
2. Map XNSE to route - add XNSE to constants file so that market specific data processor for the dash route can get the matching engine plot for india

* Trace points come in the following formats
1. Market Agnostic schema + Market agnostic mapping - e.g. standard insert, delete, trade, eeid datapoints
2. Market Agnostic schema + Market specific mapping - e.g. Korea has broker lines which map inserts/deletes/trades to a specific line + handoff
3. Market specific schema + market agnostic mapping - does not make sense
4. Market specific schema + market specific mapping - no example yet, but this category requires the most changes to implement e.g. if we were to source top level data from a Korea specific data base (specific schema), we would need to provide the api data along with the trace points in the data.specific.plots section.

## Frontend Changes

Is the schema of top level data going to be market specific?  then 1. can have backend process it so that the data schema becomes market agnostic or 2. have separate configs for each specific market kind of like for korea at the moment

1. Define interface for any market specific data (if available), else can use agnostic data interfaces.
2. Define configs for how to process the backend data
   1. Sort order
   2. Markers - How to decide what symbol to give for trace
   3. Hover Template - Format to display data on hover tooltip (for agnostic this is already already done), for new sources of data e.g. market specific top level, this needs ot be defined.
   4. Relation config - How to link data on hover of a datapoint (done for agnostic data), need to define for market specific sources fo data.
   5. Filter config - which api attributes to filter the data on?

